import { Request, Response, NextFunction } from 'express';
export declare const rateLimitMiddleware: import("express-rate-limit").RateLimitRequestHandler;
export declare function walletRateLimitMiddleware(req: Request, res: Response, next: NextFunction): void;
export declare function combinedRateLimitMiddleware(req: Request, res: Response, next: NextFunction): void;
export declare function getRateLimitStatus(): {
    ipRateLimit: {
        windowMs: number;
        maxRequests: number;
    };
    walletRateLimit: {
        maxPer24Hours: number;
        activeWalletsCount: number;
    };
    activeWalletRequests: {
        address: string;
        count: number;
        resetsIn: number;
    }[];
};
//# sourceMappingURL=rateLimit.d.ts.map