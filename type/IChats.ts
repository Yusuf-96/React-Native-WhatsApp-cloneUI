export interface IChats{
    id: string;
    user: {
        id: string;
        name: string;
        image: string;
        status?: string;
    },
    lastMessage: {
        id: string;
        text: string;
        createdAt: string
    }
}