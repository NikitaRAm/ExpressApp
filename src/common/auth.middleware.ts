import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';
import { IMiddleware } from './middleware.interface';

export interface ICusjwtPayload {
	email: string;
}

export class AuthMiddleware implements IMiddleware {
	constructor(private secret: string) {}

	execute(req: Request, res: Response, next: NextFunction): void {
		if (req.headers.authorization) {
			verify(req.headers.authorization, this.secret, (err, payload) => {
				if (err) {
					next();
				} else if (payload) {
					if (typeof payload === 'object' && payload !== null && 'email' in payload) {
						req.user = payload.email;
						next();
					} else {
						next();
					}
				}
			});
		} else {
			next();
		}
	}
}
