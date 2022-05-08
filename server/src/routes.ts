import express from "express";
import {SubmitFeedbackUseCase} from "./use-case/SubmitFeedbackUseCase";
import {PrismaFeedbacksRepository} from "./repositories/prisma/PrismaFeedbacksRepository";
import {NodemailerMailAdapter} from "./adapters/nodemailer/NodemailerMailAdapter";

export const routes = express.Router();


routes.post('/feedbacks', async (req, res) => {
    const {type, comment, screenshot} = req.body;

    var prismaFeedbacksRepository = new PrismaFeedbacksRepository();
    const nodemailerMailAdapter = new NodemailerMailAdapter();
    const submitFeedbackUseCase = new SubmitFeedbackUseCase(prismaFeedbacksRepository, nodemailerMailAdapter);

    await submitFeedbackUseCase.execute({type, comment, screenshot});

    return res.status(201).send();
})