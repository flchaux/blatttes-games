import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { createClient } from '@supabase/supabase-js'
import { Game } from "@shared/game";
import { Database } from "src/database";
import { GetGamesQuery } from "@shared/getGames.query";

@QueryHandler(GetGamesQuery)
export class GetGamesQueryHandler implements IQueryHandler<GetGamesQuery> {
    async execute(query: GetGamesQuery): Promise<Game[]> {
        const supabase = createClient<Database>(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY);
        const { data, error } = await supabase.from('games').select('*');
        return data;
    }

}