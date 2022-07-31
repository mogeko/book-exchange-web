import booksHandlers from "@/lib/mocks/api/books";
import usersHandlers from "@/lib/mocks/api/users";
import tagsHandlers from "@/lib/mocks/api/tags";

const handlers = [...booksHandlers, ...usersHandlers, ...tagsHandlers];

export default handlers;
