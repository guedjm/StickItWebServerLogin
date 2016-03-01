'use strict';

import * as express from "express";

export function getPing(req: express.Request, res: express.Response, next: express.NextFunction) {

    res.send("Helloo");
    next();
}