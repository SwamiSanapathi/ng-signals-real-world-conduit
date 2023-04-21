export interface httpErrorResponse {
    error: {
        errors: Record<string, string[]>;
    }
}