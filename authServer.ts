'use strict';

import * as express from "express";

import { getPing } from "./route/ping";

export class AuthServer {

    private  _routes: express.Router;

    constructor() {

        this._routes = express.Router();
        this._initializeRoutes();
    }

    private _initializeRoutes() {

        this._routes.get('/ping', getPing);
    }

    public get routes(): express.Router {
        return this._routes;
    }
}