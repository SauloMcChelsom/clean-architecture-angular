import { NotesEntity } from "src/app/domain/entities/notes.entity";

export interface NoteDTO {
    uid?: string;
    title: string;
    link: string;
    text: string;
    current_position?: number;
    is_favorite?: boolean;
    timestamp?: string;
}

export class NoteModel {
    static toEntity(dto:NoteDTO): NotesEntity {
        throw new Error('Method not implemented.');
    }

    static toDTO(entity:NotesEntity): NoteDTO {
        throw new Error('Method not implemented.');
    }
}