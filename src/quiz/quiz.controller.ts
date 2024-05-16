import { Body, Controller, Post, UseFilters, UseInterceptors } from '@nestjs/common';
import { Category } from './interfaces/category.interface';
import { CreateCategoryDTO } from './dto/create-categories.dto';
import { QuizService } from './quiz.service';
import { HttpExceptionFilter } from 'src/common/filters/http-exception.filter';
import { TransformInterceptor } from 'src/common/interceptors/transform/transform.interceptor';
import { CreateQuestionDTO } from './dto/create-question.dto';
import { Question } from './interfaces/question.interface';

@Controller('quiz')
@UseFilters(HttpExceptionFilter)
@UseInterceptors(TransformInterceptor)
export class QuizController {

    constructor(private quizService: QuizService){}

    @Post('categories')
    async createCategories(@Body() categories: CreateCategoryDTO): Promise<Category[]> {
        return this.quizService.createCategories(categories)
    }

    @Post('questions')
    async createQuestion(@Body() question: CreateQuestionDTO): Promise<Question> {
        return await this.quizService.createQuestion(question)
    }
}
