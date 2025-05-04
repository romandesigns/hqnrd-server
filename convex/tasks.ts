import { query } from "./_generated/server";

export const getTasks = query({
  args: {},
  handler: async (ctx, args) => {
    const tasks = await ctx.db.query("tasks").collect();
    return tasks;
  },
});
