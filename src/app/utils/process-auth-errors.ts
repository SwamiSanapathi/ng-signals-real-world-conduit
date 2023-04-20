export function processAuthErrors(errors: Record<string, string[]>) {
    const errorEntries = Object.entries(errors);
   return {
    errors: errorEntries.reduce((authErrors: any, acc) => {
         authErrors.push(acc[1].map((error: any) => `${acc[0]} ${error}`))
         return authErrors
    }, [] as string[])
   }
}