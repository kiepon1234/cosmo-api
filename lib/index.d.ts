interface Options {
    /**
     * @param {String} option.v - Версия апи
     */
    v?: string;
}
interface ResponseTransfer {
    readonly id: number;
    readonly to_id: number;
    readonly from_id: number;
    readonly amount: number;
    readonly created_at: number;
    readonly is_shop: boolean;
}
export declare class COSMOAPI {
    private verAPI;
    private APIKey;
    /**
     * @param {String} option - Обьект данных
     * @param {String} option.key - API-Токен пользователя
     */
    constructor(option: {
        /**
         * @param {String} key - API-Токен пользователя
         */
        key: string;
    } & Options);
    private sendRequest;
    /**
     * @async
     * @description Получение баланса текущего пользователя или магазина
     */
    getMyBalance(): Promise<Array<{
        merchant_id: number;
        balance: number;
    } | {
        user_id: number;
        balance: number;
    }>>;
    /**
     * @async
     * @description Получение балансов пользователей и магазинов
     */
    getBalance(ids: number[]): Promise<Array<{
        merchant_id: number;
        balance: number;
    } | {
        user_id: number;
        balance: number;
    }>>;
    /**
     * @async
     * @description Получение переводов
     * @param {String} type - Тип необходимых переводов, доступно: all - все, in - пополнения, out - выводы
     * @param {Number} offset - Смещение, необходимое для выборки определённого подмножества переводов
     * @param {Number} limit - Количество переводов которое нужно получить, максимальное значение 100
     */
    getTransfers(type?: "all" | "in" | "out", offset?: number, limit?: number): Promise<ResponseTransfer[]>;
    /**
     * @async
     * @description Перевод пользователю или в магазин
     * @param {Number} tID - ID пользователя которому нужно перевести
     * @param {Number} amount - Количество койнов которое нужно перевести
     */
    createTransfer(tID?: number, amount?: number): Promise<ResponseTransfer>;
}
export {};
