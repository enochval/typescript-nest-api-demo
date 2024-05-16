import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoryEntity } from './entities/category.entity';
import { Repository } from 'typeorm';
import { QuestionEntity } from './entities/question.entity';
import { CreateCategoryDTO } from './dto/create-categories.dto';
import { Category } from './interfaces/category.interface';
import { Question } from './interfaces/question.interface';
import { CreateQuestionDTO } from './dto/create-question.dto';

@Injectable()
export class QuizService {

    constructor(
        @InjectRepository(CategoryEntity)
        private readonly categoryRepository: Repository<CategoryEntity>,
        @InjectRepository(QuestionEntity)
        private readonly questionRepository: Repository<QuestionEntity>
    ) {}

    async createCategories(categories: CreateCategoryDTO): Promise<Category[]> {
        return await this.categoryRepository.save(categories.categories)
    }

    async createQuestion(question: CreateQuestionDTO): Promise<Question> {
        return await this.questionRepository.save(question)
    }
}
