"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.rateLimitMiddleware = void 0;
exports.walletRateLimitMiddleware = walletRateLimitMiddleware;
exports.combinedRateLimitMiddleware = combinedRateLimitMiddleware;
exports.getRateLimitStatus = getRateLimitStatus;
const express_rate_limit_1 = __importDefault(require("express-rate-limit"));
exports.rateLimitMiddleware = (0, express_rate_limit_1.default)({
    windowMs: parseInt(process.env.RATE_LIMIT_WINDOW_MS || '900000'),
    max: parseInt(process.env.RATE_LIMIT_MAX_REQUESTS || '5'),
    message: {
        success: false,
        message: 'Too many requests from this IP. Please try again later.',
        error: 'Rate limit exceeded',
        retryAfter: Math.ceil(parseInt(process.env.RATE_LIMIT_WINDOW_MS || '900000') / 1000)
    },
    standardHeaders: true,
    legacyHeaders: false,
    handler: (req, res) => {
        console.log(`🚫 Rate limit exceeded for IP: ${req.ip}`);
        res.status(429).json({
            success: false,
            message: 'Too many requests from this IP. Please try again later.',
            error: 'Rate limit exceeded',
            retryAfter: Math.ceil(parseInt(process.env.RATE_LIMIT_WINDOW_MS || '900000') / 1000)
        });
    }
});
const walletRequestStore = new Map();
function walletRateLimitMiddleware(req, res, next) {
    const walletAddress = req.body.address;
    if (!walletAddress) {
        next();
        return;
    }
    const now = Date.now();
    const maxRequestsPer24Hours = parseInt(process.env.RATE_LIMIT_MAX_PER_WALLET || '5');
    const twentyFourHoursInMs = 24 * 60 * 60 * 1000;
    for (const [address, data] of walletRequestStore.entries()) {
        if (now >= data.resetTime) {
            walletRequestStore.delete(address);
        }
    }
    const existing = walletRequestStore.get(walletAddress);
    if (existing) {
        if (existing.count >= maxRequestsPer24Hours) {
            const retryAfter = Math.ceil((existing.resetTime - now) / 1000);
            console.log(`🚫 Wallet rate limit exceeded for address: ${walletAddress}. Requests: ${existing.count}/${maxRequestsPer24Hours}. Resets in: ${retryAfter}s`);
            res.status(429).json({
                success: false,
                message: `This wallet has reached the limit of ${maxRequestsPer24Hours} requests per 24 hours. Please try again later.`,
                error: 'Wallet rate limit exceeded',
                retryAfter
            });
            return;
        }
        existing.count += 1;
    }
    else {
        walletRequestStore.set(walletAddress, {
            count: 1,
            resetTime: now + twentyFourHoursInMs
        });
    }
    next();
}
function combinedRateLimitMiddleware(req, res, next) {
    (0, exports.rateLimitMiddleware)(req, res, () => {
        walletRateLimitMiddleware(req, res, next);
    });
}
function getRateLimitStatus() {
    const now = Date.now();
    const activeWalletsArray = Array.from(walletRequestStore.entries()).filter(([, data]) => now < data.resetTime);
    return {
        ipRateLimit: {
            windowMs: parseInt(process.env.RATE_LIMIT_WINDOW_MS || '900000'),
            maxRequests: parseInt(process.env.RATE_LIMIT_MAX_REQUESTS || '5')
        },
        walletRateLimit: {
            maxPer24Hours: parseInt(process.env.RATE_LIMIT_MAX_PER_WALLET || '5'),
            activeWalletsCount: activeWalletsArray.length
        },
        activeWalletRequests: activeWalletsArray.map(([address, data]) => ({
            address: `${address.slice(0, 8)}...${address.slice(-6)}`,
            count: data.count,
            resetsIn: Math.max(0, Math.ceil((data.resetTime - now) / 1000))
        }))
    };
}
//# sourceMappingURL=rateLimit.js.map