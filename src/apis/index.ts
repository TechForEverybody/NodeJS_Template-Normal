import { Request, Response } from "express";

export function index(_: Request, response: Response) {
    response.render('index')
}