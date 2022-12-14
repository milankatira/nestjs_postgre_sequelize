import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Book } from '../models/book.model';

@Injectable()
export class LibraryService {
  constructor(
    @InjectModel(Book)
    private bookModel: typeof Book,
  ) {}

  async findAll(): Promise<Book[]> {
    return this.bookModel.findAll();
  }

  findOne(id: string): Promise<Book> {
    return this.bookModel.findOne({
      where: {
        id,
      },
    });
  }

  async createBook(book) {
    book.contanctList.map(async (book: { number: string }) => {
      const data = this.bookModel.findOne({
        where: {
          number: book.number,
        },
      });
      if (!data) {
        await this.bookModel.create(book);
      }
    });
    return;
  }
}
