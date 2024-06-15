import { NoteEntity } from "src/app/domain/entities/note.entity";
import { RESPONSE_STATUS_CODE } from "src/app/domain/helpers/enums/response_status_code.enum";

interface NoteDTO {
    status: number,
    result: string,
    data:Note[]
}

interface Note {
    uid?: string;
    title: string;
    link: string;
    text: string;
    current_position?: number;
    is_favorite?: boolean;
    timestamp?: string;
}

export class NoteMapping {
    static toEntity(dto:NoteDTO): NoteEntity {
        throw new Error('Method not implemented.');
    }

    static toDTO(entity:NoteEntity): NoteDTO {
        throw new Error('Method not implemented.');
    }
}