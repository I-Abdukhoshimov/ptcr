import { NextFunction,Request,Response } from "express";
import {logger} from "../config/logger";
import {storage} from "../storage/main";
import AppError from "../utils/appError";
import catchAsync from "../utils/catchAsync";

export class PersonController{
    getAll= catchAsync(async(req:Request,res:Response,next:NextFunction)=>{
        const person = await storage.person.find(req.query)

        res.status(200).json({
            success:true,
            data:{
                person
            }
        })
    })

    getOne = catchAsync(async(req:Request,res:Response,next:NextFunction)=>{
        const person = await storage.person.findOne(req.body)

        res.status(200).json({
            success:true,
            data:{
                person
            }
        })
    })

    create = catchAsync(async(req:Request,res:Response,next:NextFunction)=>{
        const person = await storage.person.create({...req.body})


        res.status(201).json({
            success:true,
            data:{
                person
            }
        })
    })



    delete = catchAsync(async(req:Request,res:Response,next:NextFunction)=>{
        const person = await storage.person.delete(req.params.id)
            if(!person){
                return "not found in database"
            }
            res.status(200).json({
                success:true,
                data:{
                    person
                }
            })
        })
}