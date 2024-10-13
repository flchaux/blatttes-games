import { Injectable, Type } from "@nestjs/common";

@Injectable()
export class QueryResolver {
    private static instance: QueryResolver;
    static getInstance(): any {
        if (!QueryResolver.instance) {
            QueryResolver.instance = new QueryResolver();
        }
        return QueryResolver.instance;
    }
    private queries: {
        [key: string]: Type
    }
    private constructor() {
        this.queries = {};
    }
    get(query): Type {
        const queryType = this.queries[query + "Query"];
        if (!queryType) {
            throw new Error(`Query ${query} not found`);
        }
        return queryType;
    }
    async register(name: string, type: Type) {
        this.queries[name] = type;
    }
}