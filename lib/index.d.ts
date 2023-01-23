declare class Methods {
    private verAPI;
    private APIKey;
    /**
     * @param {String} APIKey - API-Токен пользователя
     */
    constructor(APIKey: string);
    private sendRequest;
    /**
     * @async
     * @description Получение баланса
     */
    getMyBalance(): Promise<any>;
    /**
     * @async
     * @description Получение баланса
     */
    getBalance(ids: number[]): Promise<any>;
    /**
     * @async
     * @description Получение переводов
     * @param {String} type - Тип необходимых переводов, доступно: all - любые, in - пополнения, out - переводы
     * @param {Number} offset - Смещение, необходимое для выборки определённого подмножества переводов
     * @param {Number} limit - Количество переводов которое нужно получить, максимальное значение 100
     */
    getTransfers(type?: string, offset?: number, limit?: number): Promise<void>;
    /**
     * @async
     * @description Перевод пользователю
     * @param {Number} tID - ID пользователя которому нужно перевести
     * @param {Number} amount - Количество койнов которое нужно перевести
     */
    createTransfer(tID?: number, amount?: number): Promise<any>;
    /**
     * @async
     * @description Создание Callback
     * @param {String} url - URL на который будет приходить Callback
     */
    createCallback(url?: string): Promise<any>;
    /**
     * @async
     * @description Удаление Callbak
     * @param {Function} cb Функция Callback при ошибке
     */
    deleteCallbak(): Promise<any>;
}
export declare class API {
    methods: Methods;
    /**
     * @description Конфигурация
     * @param {Object} options - Обьект данных
     * @param {String} option.key - API-ключ пользователя
     * @param {Number} option.user_id - VK ID пользователя
     */
    constructor(options: {
        /**
         * @param {String} option.key - API-ключ пользователя
         */
        key: string;
    });
}
export {};
