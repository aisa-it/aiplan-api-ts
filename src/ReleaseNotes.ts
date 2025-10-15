/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

/**
 * @title AIPlan API
 * @version 1.0
 * @contact
 *
 * AIPlan - open-source project management system with task management, document collaboration, forms, video conferencing, and calendar features.
 */
export class Api<
  SecurityDataType extends unknown,
> extends HttpClient<SecurityDataType> {
  workspace = {
    /**
     * @description Возвращает список активностей верхнего уровня с поддержкой пагинации
     *
     * @tags Workspace
     * @name GeRootActivityList
     * @summary Активности: получение активностей верхнего уровня
     * @request GET:/api/auth/admin/activities/
     * @secure
     */
    geRootActivityList: (
      query?: {
        /**
         * День выборки активностей
         * @default """"
         */
        day?: string;
        /**
         * Смещение для пагинации
         * @default -1
         */
        offset?: number;
        /**
         * Количество результатов на странице
         * @default 100
         */
        limit?: number;
      },
      reqParams: RequestParams = {},
    ) =>
      this.request<
        DaoPaginationResponse & {
          result?: DtoEntityActivityFull[];
        },
        ApierrorsDefinedError
      >({
        path: `/api/auth/admin/activities/`,
        method: "GET",
        query: query,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...reqParams,
      }),

    /**
     * @description Возвращает информацию о последнем посещенном рабочем пространстве пользователя. Если ID последнего рабочего пространства отсутствует, возвращает пустые данные.
     *
     * @tags Workspace
     * @name GetLastVisitedWorkspace
     * @summary Пространство: получение последнего посещенного рабочего пространства
     * @request GET:/api/auth/users/last-visited-workspace
     * @secure
     */
    getLastVisitedWorkspace: (reqParams: RequestParams = {}) =>
      this.request<AiplanResponseLastWorkspace, ApierrorsDefinedError>({
        path: `/api/auth/users/last-visited-workspace`,
        method: "GET",
        secure: true,
        format: "json",
        ...reqParams,
      }),

    /**
     * @description Возвращает список рабочих пространств, в которых состоит текущий пользователь, с возможностью поиска по имени.
     *
     * @tags Workspace
     * @name GetUserWorkspaceList
     * @summary Пространство: получение рабочих пространств пользователя
     * @request GET:/api/auth/users/me/workspaces/
     * @secure
     */
    getUserWorkspaceList: (
      query?: {
        /** Поисковый запрос для фильтрации рабочих пространств по имени */
        search_query?: string;
      },
      reqParams: RequestParams = {},
    ) =>
      this.request<DtoWorkspaceWithCount[], ApierrorsDefinedError>({
        path: `/api/auth/users/me/workspaces/`,
        method: "GET",
        query: query,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...reqParams,
      }),

    /**
     * @description Возвращает список избранных рабочих пространств с информацией о владельце.
     *
     * @tags Workspace
     * @name GetFavoriteWorkspaceList
     * @summary Пространство (избранное): получение избранных пространств
     * @request GET:/api/auth/users/user-favorite-workspaces/
     * @secure
     */
    getFavoriteWorkspaceList: (reqParams: RequestParams = {}) =>
      this.request<DtoWorkspaceFavorites[], ApierrorsDefinedError>({
        path: `/api/auth/users/user-favorite-workspaces/`,
        method: "GET",
        secure: true,
        format: "json",
        ...reqParams,
      }),

    /**
     * @description Добавляет рабочее пространство в избранное для текущего пользователя.
     *
     * @tags Workspace
     * @name AddWorkspaceToFavorites
     * @summary Пространство (избранное): добавление пространства в избранное
     * @request POST:/api/auth/users/user-favorite-workspaces/
     * @secure
     */
    addWorkspaceToFavorites: (
      workspace: AiplanRequestAddFavorite,
      reqParams: RequestParams = {},
    ) =>
      this.request<string, ApierrorsDefinedError>({
        path: `/api/auth/users/user-favorite-workspaces/`,
        method: "POST",
        body: workspace,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...reqParams,
      }),

    /**
     * @description Удаляет рабочее пространство из избранного для текущего пользователя по его ID.
     *
     * @tags Workspace
     * @name RemoveWorkspaceFromFavorites
     * @summary Пространство (избранное): удаление пространства из избранного
     * @request DELETE:/api/auth/users/user-favorite-workspaces/{workspaceID}
     * @secure
     */
    removeWorkspaceFromFavorites: (
      workspaceId: string,
      reqParams: RequestParams = {},
    ) =>
      this.request<string, ApierrorsDefinedError>({
        path: `/api/auth/users/user-favorite-workspaces/${workspaceId}`,
        method: "DELETE",
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...reqParams,
      }),

    /**
     * @description Создает новое рабочее пространство с заданными параметрами.
     *
     * @tags Workspace
     * @name CreateWorkspace
     * @summary Пространство: создание нового пространства
     * @request POST:/api/auth/workspaces/
     * @secure
     */
    createWorkspace: (
      request: AiplanCreateWorkspaceRequest,
      reqParams: RequestParams = {},
    ) =>
      this.request<DtoWorkspace, ApierrorsDefinedError>({
        path: `/api/auth/workspaces/`,
        method: "POST",
        body: request,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...reqParams,
      }),

    /**
     * @description Возвращает информацию о рабочем пространстве по его ID
     *
     * @tags Workspace
     * @name GetWorkspace
     * @summary Пространство: получение информации о рабочем пространстве
     * @request GET:/api/auth/workspaces/{workspaceSlug}
     * @secure
     */
    getWorkspace: (workspaceSlug: string, reqParams: RequestParams = {}) =>
      this.request<DtoWorkspace, ApierrorsDefinedError>({
        path: `/api/auth/workspaces/${workspaceSlug}`,
        method: "GET",
        secure: true,
        format: "json",
        ...reqParams,
      }),

    /**
     * @description Удаляет указанное рабочее пространство. Доступно только для суперпользователей и владельца рабочего пространства.
     *
     * @tags Workspace
     * @name DeleteWorkspace
     * @summary Пространство: удаление пространства
     * @request DELETE:/api/auth/workspaces/{workspaceSlug}
     * @secure
     */
    deleteWorkspace: (workspaceSlug: string, reqParams: RequestParams = {}) =>
      this.request<void, ApierrorsDefinedError>({
        path: `/api/auth/workspaces/${workspaceSlug}`,
        method: "DELETE",
        secure: true,
        type: ContentType.Json,
        ...reqParams,
      }),

    /**
     * @description Обновляет информацию о рабочем пространстве
     *
     * @tags Workspace
     * @name UpdateWorkspace
     * @summary Пространство: обновление данных рабочего пространства
     * @request PATCH:/api/auth/workspaces/{workspaceSlug}
     * @secure
     */
    updateWorkspace: (
      workspaceSlug: string,
      workspace: DtoWorkspace,
      reqParams: RequestParams = {},
    ) =>
      this.request<DtoWorkspace, ApierrorsDefinedError>({
        path: `/api/auth/workspaces/${workspaceSlug}`,
        method: "PATCH",
        body: workspace,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...reqParams,
      }),

    /**
     * @description Возвращает список активностей рабочего пространства с поддержкой пагинации
     *
     * @tags Workspace
     * @name GetWorkspaceActivityList
     * @summary Пространство: получение активностей рабочего пространства
     * @request GET:/api/auth/workspaces/{workspaceSlug}/activities
     * @secure
     */
    getWorkspaceActivityList: (
      workspaceSlug: string,
      query?: {
        /**
         * День выборки активностей
         * @default """"
         */
        day?: string;
        /**
         * Смещение для пагинации
         * @default -1
         */
        offset?: number;
        /**
         * Количество результатов на странице
         * @default 100
         */
        limit?: number;
      },
      reqParams: RequestParams = {},
    ) =>
      this.request<
        DaoPaginationResponse & {
          result?: DtoEntityActivityFull[];
        },
        ApierrorsDefinedError
      >({
        path: `/api/auth/workspaces/${workspaceSlug}/activities`,
        method: "GET",
        query: query,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...reqParams,
      }),

    /**
     * @description получение интеграций
     *
     * @tags Workspace
     * @name GetIntegrationList
     * @summary Пространство (интеграции): получение интеграций
     * @request GET:/api/auth/workspaces/{workspaceSlug}/integrations/
     * @secure
     */
    getIntegrationList: (
      workspaceSlug: string,
      reqParams: RequestParams = {},
    ) =>
      this.request<IntegrationsIntegration[], ApierrorsDefinedError>({
        path: `/api/auth/workspaces/${workspaceSlug}/integrations/`,
        method: "GET",
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...reqParams,
      }),

    /**
     * @description добавление интеграции в пространство
     *
     * @tags Workspace
     * @name AddIntegrationToWorkspace
     * @summary Пространство (интеграции): добавление интеграции
     * @request POST:/api/auth/workspaces/{workspaceSlug}/integrations/add/{name}/
     * @secure
     */
    addIntegrationToWorkspace: (
      workspaceSlug: string,
      name: string,
      reqParams: RequestParams = {},
    ) =>
      this.request<void, ApierrorsDefinedError>({
        path: `/api/auth/workspaces/${workspaceSlug}/integrations/add/${name}/`,
        method: "POST",
        secure: true,
        type: ContentType.Json,
        ...reqParams,
      }),

    /**
     * @description удаление интеграции из пространства
     *
     * @tags Workspace
     * @name DeleteIntegrationFromWorkspace
     * @summary Пространство (интеграции): удаление интеграции
     * @request POST:/api/auth/workspaces/{workspaceSlug}/integrations/{name}/
     * @secure
     */
    deleteIntegrationFromWorkspace: (
      workspaceSlug: string,
      name: string,
      reqParams: RequestParams = {},
    ) =>
      this.request<void, ApierrorsDefinedError>({
        path: `/api/auth/workspaces/${workspaceSlug}/integrations/${name}/`,
        method: "POST",
        secure: true,
        type: ContentType.Json,
        ...reqParams,
      }),

    /**
     * @description Приглашает новых пользователей или существующих в системе в указанное рабочее пространство, Приглашённые получают роль, определённую отправителем.
     *
     * @tags Workspace
     * @name AddToWorkspace
     * @summary Пространство: приглашение новых участников пространства
     * @request POST:/api/auth/workspaces/{workspaceSlug}/invite
     * @secure
     */
    addToWorkspace: (
      workspaceSlug: string,
      invite: AiplanRequestMembersInvite,
      reqParams: RequestParams = {},
    ) =>
      this.request<Record<string, any>, ApierrorsDefinedError>({
        path: `/api/auth/workspaces/${workspaceSlug}/invite`,
        method: "POST",
        body: invite,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...reqParams,
      }),

    /**
     * @description Генерирует и возвращает JWT-токен для доступа пользователя в комнату Jitsi, соответствующую рабочему пространству.
     *
     * @tags Workspace
     * @name GetWorkspaceJitsiToken
     * @summary Пространство: получение токена для Jitsi-комнаты рабочего пространства
     * @request GET:/api/auth/workspaces/{workspaceSlug}/jitsi-token
     * @secure
     */
    getWorkspaceJitsiToken: (
      workspaceSlug: string,
      reqParams: RequestParams = {},
    ) =>
      this.request<Record<string, string>, ApierrorsDefinedError>({
        path: `/api/auth/workspaces/${workspaceSlug}/jitsi-token`,
        method: "GET",
        secure: true,
        format: "json",
        ...reqParams,
      }),

    /**
     * @description Загружает новый логотип для указанного рабочего пространства и обновляет запись в базе данных.
     *
     * @tags Workspace
     * @name UpdateWorkspaceLogo
     * @summary Пространство (логотип): обновление пространства
     * @request POST:/api/auth/workspaces/{workspaceSlug}/logo
     * @secure
     */
    updateWorkspaceLogo: (
      workspaceSlug: string,
      data: {
        /** Файл логотипа */
        file: File;
      },
      reqParams: RequestParams = {},
    ) =>
      this.request<DtoWorkspace, ApierrorsDefinedError>({
        path: `/api/auth/workspaces/${workspaceSlug}/logo`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.FormData,
        format: "json",
        ...reqParams,
      }),

    /**
     * @description Удаляет логотип указанного рабочего пространства и обновляет запись в базе данных.
     *
     * @tags Workspace
     * @name DeleteWorkspaceLogo
     * @summary Пространство (логотип): удаление логотипа пространства
     * @request DELETE:/api/auth/workspaces/{workspaceSlug}/logo
     * @secure
     */
    deleteWorkspaceLogo: (
      workspaceSlug: string,
      reqParams: RequestParams = {},
    ) =>
      this.request<DtoWorkspace, ApierrorsDefinedError>({
        path: `/api/auth/workspaces/${workspaceSlug}/logo`,
        method: "DELETE",
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...reqParams,
      }),

    /**
     * @description Обновляет настройки уведомлений для текущего участника пространства.
     *
     * @tags Workspace
     * @name UpdateMyWorkspaceNotifications
     * @summary Пространство (участники): обновление настроек уведомлений текущего участника
     * @request POST:/api/auth/workspaces/{workspaceSlug}/me/notifications/
     * @secure
     */
    updateMyWorkspaceNotifications: (
      workspaceSlug: string,
      notificationSettings: AiplanWorkspaceNotificationRequest,
      reqParams: RequestParams = {},
    ) =>
      this.request<void, ApierrorsDefinedError>({
        path: `/api/auth/workspaces/${workspaceSlug}/me/notifications/`,
        method: "POST",
        body: notificationSettings,
        secure: true,
        type: ContentType.Json,
        ...reqParams,
      }),

    /**
     * @description Возвращает список участников указанного рабочего пространства. Включает поиск по email или имени.
     *
     * @tags Workspace
     * @name GetWorkspaceMemberList
     * @summary Пространство (участники): получение списка участников пространства
     * @request GET:/api/auth/workspaces/{workspaceSlug}/members
     * @secure
     */
    getWorkspaceMemberList: (
      workspaceSlug: string,
      query?: {
        /**
         * Смещение для пагинации
         * @default -1
         */
        offset?: number;
        /**
         * Ограничение количества записей на странице
         * @default 100
         */
        limit?: number;
        /**
         * Поисковый запрос для фильтрации участников по email или имени
         * @default """"
         */
        search_query?: string;
        /**
         * Поле для сортировки: 'last_name' (по умолчанию), 'email', 'role'
         * @default ""last_name""
         */
        order_by?: string;
        /**
         * Направление сортировки: true - по убыванию, false - по возрастанию
         * @default true
         */
        desc?: boolean;
      },
      reqParams: RequestParams = {},
    ) =>
      this.request<
        DaoPaginationResponse & {
          result?: DtoWorkspaceMemberLight[];
        },
        ApierrorsDefinedError
      >({
        path: `/api/auth/workspaces/${workspaceSlug}/members`,
        method: "GET",
        query: query,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...reqParams,
      }),

    /**
     * @description активность участников пространства
     *
     * @tags Workspace
     * @name GetWorkspaceMembersActivityList
     * @summary Пространство: активность участников
     * @request GET:/api/auth/workspaces/{workspaceSlug}/members/activities/
     * @secure
     */
    getWorkspaceMembersActivityList: (
      workspaceSlug: string,
      query: {
        /** Начальная дата периода в формате YYYY-MM-DD */
        from: string;
        /** Конечная дата периода в формате YYYY-MM-DD */
        to: string;
      },
      reqParams: RequestParams = {},
    ) =>
      this.request<Record<string, TypesActivityTable>, ApierrorsDefinedError>({
        path: `/api/auth/workspaces/${workspaceSlug}/members/activities/`,
        method: "GET",
        query: query,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...reqParams,
      }),

    /**
     * @description Позволяет отправить сообщение всем участникам рабочего пространства или выбранным участникам. Поддерживается отправка отложенных сообщений.
     *
     * @tags Workspace
     * @name CreateMessageForWorkspaceMember
     * @summary Пространство: Отправка сообщений участникам
     * @request POST:/api/auth/workspaces/{workspaceSlug}/members/message/
     * @secure
     */
    createMessageForWorkspaceMember: (
      workspaceSlug: string,
      data: AiplanRequestMessage,
      reqParams: RequestParams = {},
    ) =>
      this.request<void, ApierrorsDefinedError>({
        path: `/api/auth/workspaces/${workspaceSlug}/members/message/`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...reqParams,
      }),

    /**
     * @description Удаляет указанного участника из рабочего пространства
     *
     * @tags Workspace
     * @name DeleteWorkspaceMember
     * @summary Пространство (участники): удаление участника пространства
     * @request DELETE:/api/auth/workspaces/{workspaceSlug}/members/{memberId}
     * @secure
     */
    deleteWorkspaceMember: (
      workspaceSlug: string,
      memberId: string,
      reqParams: RequestParams = {},
    ) =>
      this.request<void, ApierrorsDefinedError>({
        path: `/api/auth/workspaces/${workspaceSlug}/members/${memberId}`,
        method: "DELETE",
        secure: true,
        type: ContentType.Json,
        ...reqParams,
      }),

    /**
     * @description Изменяет роль участника в рабочем пространстве. Администраторы могут назначать и изменять роли участников.
     *
     * @tags Workspace
     * @name UpdateWorkspaceMember
     * @summary Пространство (участники): обновление роли участника пространства
     * @request PATCH:/api/auth/workspaces/{workspaceSlug}/members/{memberId}
     * @secure
     */
    updateWorkspaceMember: (
      workspaceSlug: string,
      memberId: string,
      role: AiplanRequestRoleMember,
      reqParams: RequestParams = {},
    ) =>
      this.request<DtoWorkspaceMemberLight, ApierrorsDefinedError>({
        path: `/api/auth/workspaces/${workspaceSlug}/members/${memberId}`,
        method: "PATCH",
        body: role,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...reqParams,
      }),

    /**
     * @description Устанавливает email для участника рабочего пространства. Операция доступна только администраторам рабочего пространства.
     *
     * @tags Workspace
     * @name UpdateUserEmail
     * @summary Пространство (участники): назначение email для участника пространства
     * @request PATCH:/api/auth/workspaces/{workspaceSlug}/members/{memberId}/set-email/
     * @secure
     */
    updateUserEmail: (
      workspaceSlug: string,
      memberId: string,
      email: AiplanRequestEmailMember,
      reqParams: RequestParams = {},
    ) =>
      this.request<void, ApierrorsDefinedError>({
        path: `/api/auth/workspaces/${workspaceSlug}/members/${memberId}/set-email/`,
        method: "PATCH",
        body: email,
        secure: true,
        type: ContentType.Json,
        ...reqParams,
      }),

    /**
     * @description Возвращает список состояний, сгруппированных по проектам, для указанного рабочего пространства.
     *
     * @tags Workspace
     * @name GetWorkspaceStateList
     * @summary Пространство: получение состояния рабочего пространства
     * @request GET:/api/auth/workspaces/{workspaceSlug}/states/
     * @secure
     */
    getWorkspaceStateList: (
      workspaceSlug: string,
      reqParams: RequestParams = {},
    ) =>
      this.request<Record<string, DtoStateLight[]>, ApierrorsDefinedError>({
        path: `/api/auth/workspaces/${workspaceSlug}/states/`,
        method: "GET",
        secure: true,
        format: "json",
        ...reqParams,
      }),

    /**
     * @description Возвращает токен интеграции для указанного рабочего пространства, если пользователь имеет необходимые права доступа.
     *
     * @tags Workspace
     * @name GetWorkspaceToken
     * @summary Пространство (токен): получение токена для пространства
     * @request GET:/api/auth/workspaces/{workspaceSlug}/token
     * @secure
     */
    getWorkspaceToken: (workspaceSlug: string, reqParams: RequestParams = {}) =>
      this.request<string, ApierrorsDefinedError>({
        path: `/api/auth/workspaces/${workspaceSlug}/token`,
        method: "GET",
        secure: true,
        ...reqParams,
      }),

    /**
     * @description Генерирует новый токен интеграции для указанного рабочего пространства.
     *
     * @tags Workspace
     * @name ResetWorkspaceToken
     * @summary Пространство (токен): сброс токена для пространства
     * @request POST:/api/auth/workspaces/{workspaceSlug}/token/reset/
     * @secure
     */
    resetWorkspaceToken: (
      workspaceSlug: string,
      reqParams: RequestParams = {},
    ) =>
      this.request<string, ApierrorsDefinedError>({
        path: `/api/auth/workspaces/${workspaceSlug}/token/reset/`,
        method: "POST",
        secure: true,
        format: "json",
        ...reqParams,
      }),

    /**
     * @description Возвращает данные участника для текущего пользователя в рабочем пространстве.
     *
     * @tags Workspace
     * @name GetWorkspaceMemberMe
     * @summary Пространство: получение информации о текущем участнике рабочего пространства
     * @request GET:/api/auth/workspaces/{workspaceSlug}/workspace-members/me/
     * @secure
     */
    getWorkspaceMemberMe: (
      workspaceSlug: string,
      reqParams: RequestParams = {},
    ) =>
      this.request<DtoWorkspaceMember, ApierrorsDefinedError>({
        path: `/api/auth/workspaces/${workspaceSlug}/workspace-members/me/`,
        method: "GET",
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...reqParams,
      }),
  };
  adminPanel = {
    /**
     * @description Возвращает список всех отзывов пользователей с поддержкой пагинации, сортировки и фильтрации
     *
     * @tags AdminPanel
     * @name GetAllFeedbackList
     * @summary Feedback: получение всех отзывов пользователей
     * @request GET:/api/auth/admin/feedbacks
     * @secure
     */
    getAllFeedbackList: (
      query?: {
        /**
         * Смещение для пагинации
         * @default 0
         */
        offset?: number;
        /**
         * Количество результатов на странице
         * @default 100
         */
        limit?: number;
        /** Поле для сортировки */
        order_by?: string;
        /**
         * Направление сортировки: true - по убыванию, false - по возрастанию
         * @default false
         */
        desc?: boolean;
      },
      reqParams: RequestParams = {},
    ) =>
      this.request<
        DaoPaginationResponse & {
          result?: DtoUserFeedback[];
        },
        ApierrorsDefinedError
      >({
        path: `/api/auth/admin/feedbacks`,
        method: "GET",
        query: query,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...reqParams,
      }),

    /**
     * @description Экспортирует отзывы пользователей в сжатом CSV файле
     *
     * @tags AdminPanel
     * @name ExportFeedbackList
     * @summary Feedback: экспорт отзывов пользователей
     * @request GET:/api/auth/admin/feedbacks/export
     * @secure
     */
    exportFeedbackList: (reqParams: RequestParams = {}) =>
      this.request<void, ApierrorsDefinedError>({
        path: `/api/auth/admin/feedbacks/export`,
        method: "GET",
        secure: true,
        type: ContentType.Json,
        ...reqParams,
      }),

    /**
     * @description получение текущих импортов в активном статусе
     *
     * @tags AdminPanel
     * @name GetRunningImportList
     * @summary templates: список текущих импортов
     * @request GET:/api/auth/admin/imports/
     * @secure
     */
    getRunningImportList: (reqParams: RequestParams = {}) =>
      this.request<IssuesImportImportStatus[], ApierrorsDefinedError>({
        path: `/api/auth/admin/imports/`,
        method: "GET",
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...reqParams,
      }),

    /**
     * @description Возвращает список проектов внутри указанного рабочего пространства с поддержкой пагинации, сортировки и поиска
     *
     * @tags AdminPanel
     * @name GetWorkspaceProjectList
     * @summary Проекты: получение проектов рабочего пространства
     * @request GET:/api/auth/admin/projects/{workspaceId}
     * @secure
     */
    getWorkspaceProjectList: (
      workspaceId: string,
      query?: {
        /**
         * Смещение для пагинации
         * @default 0
         */
        offset?: number;
        /**
         * Количество результатов на странице
         * @default 100
         */
        limit?: number;
        /** Поле для сортировки */
        order_by?: string;
        /**
         * Направление сортировки: true - по убыванию, false - по возрастанию
         * @default false
         */
        desc?: boolean;
        /** Строка для поиска */
        search_query?: string;
      },
      reqParams: RequestParams = {},
    ) =>
      this.request<
        DaoPaginationResponse & {
          result?: DtoProject[];
        },
        ApierrorsDefinedError
      >({
        path: `/api/auth/admin/projects/${workspaceId}`,
        method: "GET",
        query: query,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...reqParams,
      }),

    /**
     * @description Создает новое примечание к релизу
     *
     * @tags AdminPanel
     * @name CreateReleaseNote
     * @summary Релизы: создание примечания к релизу
     * @request POST:/api/auth/admin/release-notes
     * @secure
     */
    createReleaseNote: (
      data: DtoReleaseNoteLight,
      reqParams: RequestParams = {},
    ) =>
      this.request<void, ApierrorsDefinedError>({
        path: `/api/auth/admin/release-notes`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...reqParams,
      }),

    /**
     * @description Удаляет примечание к релизу по ID
     *
     * @tags AdminPanel
     * @name DeleteReleaseNote
     * @summary Релизы: удаление примечания к релизу
     * @request DELETE:/api/auth/admin/release-notes/{noteId}
     * @secure
     */
    deleteReleaseNote: (noteId: string, reqParams: RequestParams = {}) =>
      this.request<void, ApierrorsDefinedError>({
        path: `/api/auth/admin/release-notes/${noteId}`,
        method: "DELETE",
        secure: true,
        type: ContentType.Json,
        ...reqParams,
      }),

    /**
     * @description Обновляет информацию о примечании к релизу
     *
     * @tags AdminPanel
     * @name UpdateReleaseNote
     * @summary Релизы: редактирование примечания к релизу
     * @request PATCH:/api/auth/admin/release-notes/{noteId}
     * @secure
     */
    updateReleaseNote: (
      noteId: string,
      data: DtoReleaseNoteLight,
      reqParams: RequestParams = {},
    ) =>
      this.request<DtoReleaseNoteLight, ApierrorsDefinedError>({
        path: `/api/auth/admin/release-notes/${noteId}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...reqParams,
      }),

    /**
     * @description Возвращает список тарифов с возможностью сортировки, фильтрации и пагинации
     *
     * @tags AdminPanel
     * @name GetAllTariffList
     * @summary Tariffs: получить список тарифов
     * @request GET:/api/auth/admin/tariffication/
     * @secure
     */
    getAllTariffList: (
      query?: {
        /** Поле для сортировки (по умолчанию user_id) */
        order_by?: string;
        /** Смещение (пагинация) (-1 для начала) */
        offset?: number;
        /** Лимит записей (максимум 1000, по умолчанию 100) */
        limit?: number;
        /** Сортировка по убыванию (по умолчанию true) */
        desc?: boolean;
        /** Строка поиска (по email, имени или фамилии) */
        search_query?: string;
      },
      reqParams: RequestParams = {},
    ) =>
      this.request<
        DaoPaginationResponse & {
          result?: DtoTariffication[];
        },
        ApierrorsDefinedError
      >({
        path: `/api/auth/admin/tariffication/`,
        method: "GET",
        query: query,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...reqParams,
      }),

    /**
     * @description Создаёт новый тариф для пользователя
     *
     * @tags AdminPanel
     * @name CreateUserTariff
     * @summary Tariffs: создать новый тариф
     * @request POST:/api/auth/admin/tariffication/
     * @secure
     */
    createUserTariff: (
      tariff: DtoTariffication,
      reqParams: RequestParams = {},
    ) =>
      this.request<DtoTariffication, ApierrorsDefinedError>({
        path: `/api/auth/admin/tariffication/`,
        method: "POST",
        body: tariff,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...reqParams,
      }),

    /**
     * @description Возвращает тариф, связанный с указанным пользователем
     *
     * @tags AdminPanel
     * @name GetUserTariff
     * @summary Tariffs: получить тариф пользователя
     * @request GET:/api/auth/admin/tariffication/{userId}
     * @secure
     */
    getUserTariff: (userId: string, reqParams: RequestParams = {}) =>
      this.request<DtoTariffication, ApierrorsDefinedError>({
        path: `/api/auth/admin/tariffication/${userId}`,
        method: "GET",
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...reqParams,
      }),

    /**
     * @description Обновляет данные существующего тарифа
     *
     * @tags AdminPanel
     * @name UpdateUserTariff
     * @summary Tariffs: обновить тариф пользователя
     * @request PUT:/api/auth/admin/tariffication/{userId}
     * @secure
     */
    updateUserTariff: (
      userId: string,
      tariff: DtoTariffication,
      reqParams: RequestParams = {},
    ) =>
      this.request<DtoTariffication, ApierrorsDefinedError>({
        path: `/api/auth/admin/tariffication/${userId}`,
        method: "PUT",
        body: tariff,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...reqParams,
      }),

    /**
     * @description Удаляет тариф, связанный с указанным пользователем
     *
     * @tags AdminPanel
     * @name DeleteUserTariff
     * @summary Tariffs: удалить тариф пользователя
     * @request DELETE:/api/auth/admin/tariffication/{userId}
     * @secure
     */
    deleteUserTariff: (userId: string, reqParams: RequestParams = {}) =>
      this.request<void, ApierrorsDefinedError>({
        path: `/api/auth/admin/tariffication/${userId}`,
        method: "DELETE",
        secure: true,
        type: ContentType.Json,
        ...reqParams,
      }),

    /**
     * @description сброс шаблонов почты к установкам по умолчанию
     *
     * @tags AdminPanel
     * @name ReloadTemplates
     * @summary templates: сброс
     * @request POST:/api/auth/admin/templates/reset/
     * @secure
     */
    reloadTemplates: (reqParams: RequestParams = {}) =>
      this.request<void, ApierrorsDefinedError>({
        path: `/api/auth/admin/templates/reset/`,
        method: "POST",
        secure: true,
        type: ContentType.Json,
        ...reqParams,
      }),

    /**
     * @description Возвращает список всех пользователей с поддержкой пагинации, сортировки и поиска
     *
     * @tags AdminPanel
     * @name GetAllUserList
     * @summary Пользователи: получение всех пользователей
     * @request GET:/api/auth/admin/users
     * @secure
     */
    getAllUserList: (
      query?: {
        /**
         * Смещение для пагинации
         * @default 0
         */
        offset?: number;
        /**
         * Количество результатов на странице
         * @default 100
         */
        limit?: number;
        /** Поле для сортировки */
        order_by?: string;
        /**
         * Направление сортировки: true - по убыванию, false - по возрастанию
         * @default false
         */
        desc?: boolean;
        /** Строка для поиска */
        search_query?: string;
      },
      reqParams: RequestParams = {},
    ) =>
      this.request<
        DaoPaginationResponse & {
          result?: DtoUserLight[];
        },
        ApierrorsDefinedError
      >({
        path: `/api/auth/admin/users`,
        method: "GET",
        query: query,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...reqParams,
      }),

    /**
     * @description Создает нового пользователя и добавляет его в рабочее пространство при необходимости
     *
     * @tags AdminPanel
     * @name CreateUser
     * @summary Пользователи: создание пользователя
     * @request POST:/api/auth/admin/users
     * @secure
     */
    createUser: (
      data: AiplanUserCreateRequest,
      reqParams: RequestParams = {},
    ) =>
      this.request<DtoUserLight, ApierrorsDefinedError>({
        path: `/api/auth/admin/users`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...reqParams,
      }),

    /**
     * @description Позволяет отправить сообщение всем или выбранным пользователям. Поддерживается отправка отложенных сообщений.
     *
     * @tags AdminPanel
     * @name CreateMessageForMember
     * @summary Пользователи: Отправка сообщения
     * @request POST:/api/auth/admin/users/message/
     * @secure
     */
    createMessageForMember: (
      data: AiplanRequestMessage,
      reqParams: RequestParams = {},
    ) =>
      this.request<void, ApierrorsDefinedError>({
        path: `/api/auth/admin/users/message/`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...reqParams,
      }),

    /**
     * @description Возвращает информацию о пользователе по его ID
     *
     * @tags AdminPanel
     * @name GetUserById
     * @summary Пользователи: получение пользователя по ID
     * @request GET:/api/auth/admin/users/{userId}
     * @secure
     */
    getUserById: (userId: string, reqParams: RequestParams = {}) =>
      this.request<DtoUserLight, ApierrorsDefinedError>({
        path: `/api/auth/admin/users/${userId}`,
        method: "GET",
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...reqParams,
      }),

    /**
     * @description Удаляет пользователя по его ID
     *
     * @tags AdminPanel
     * @name DeleteUser
     * @summary Пользователи: удаление пользователя
     * @request DELETE:/api/auth/admin/users/{userId}
     * @secure
     */
    deleteUser: (userId: string, reqParams: RequestParams = {}) =>
      this.request<void, ApierrorsDefinedError>({
        path: `/api/auth/admin/users/${userId}`,
        method: "DELETE",
        secure: true,
        type: ContentType.Json,
        ...reqParams,
      }),

    /**
     * @description Обновляет информацию о пользователе
     *
     * @tags AdminPanel
     * @name UpdateUser
     * @summary Пользователи: изменение пользователя
     * @request PATCH:/api/auth/admin/users/{userId}
     * @secure
     */
    updateUser: (
      userId: string,
      data: Record<string, any>,
      reqParams: RequestParams = {},
    ) =>
      this.request<DtoUserLight, ApierrorsDefinedError>({
        path: `/api/auth/admin/users/${userId}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...reqParams,
      }),

    /**
     * @description Возвращает отзыв пользователя по его ID
     *
     * @tags AdminPanel
     * @name GetUserFeedback
     * @summary Пользователи: получение отзыва пользователя
     * @request GET:/api/auth/admin/users/{userId}/feedback
     * @secure
     */
    getUserFeedback: (userId: string, reqParams: RequestParams = {}) =>
      this.request<DtoUserFeedback, ApierrorsDefinedError>({
        path: `/api/auth/admin/users/${userId}/feedback`,
        method: "GET",
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...reqParams,
      }),

    /**
     * @description Возвращает список рабочих пространств, к которым принадлежит пользователь, с поддержкой пагинации, сортировки и поиска
     *
     * @tags AdminPanel
     * @name GeWorkspaceListByUser
     * @summary Пользователи: получение пространств пользователя
     * @request GET:/api/auth/admin/users/{userId}/workspaces
     * @secure
     */
    geWorkspaceListByUser: (
      userId: string,
      query?: {
        /**
         * Смещение для пагинации
         * @default 0
         */
        offset?: number;
        /**
         * Количество результатов на странице
         * @default 100
         */
        limit?: number;
        /**
         * Все пространства, или где состоит пользователь
         * @default false
         */
        all?: boolean;
        /** Поле для сортировки */
        order_by?: string;
        /**
         * Направление сортировки: true - по убыванию, false - по возрастанию
         * @default false
         */
        desc?: boolean;
        /** Строка для поиска */
        search_query?: string;
      },
      reqParams: RequestParams = {},
    ) =>
      this.request<
        DaoPaginationResponse & {
          result?: DtoWorkspace[];
        },
        ApierrorsDefinedError
      >({
        path: `/api/auth/admin/users/${userId}/workspaces`,
        method: "GET",
        query: query,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...reqParams,
      }),

    /**
     * @description Возвращает список проектов пользователя в указанном рабочем пространстве с поддержкой пагинации, сортировки и поиска
     *
     * @tags AdminPanel
     * @name GetProjectListByUser
     * @summary Пользователи: получение проектов пользователя в рабочем пространстве
     * @request GET:/api/auth/admin/users/{userId}/workspaces/{workspaceId}
     * @secure
     */
    getProjectListByUser: (
      userId: string,
      workspaceId: string,
      query?: {
        /**
         * Смещение для пагинации
         * @default 0
         */
        offset?: number;
        /**
         * Количество результатов на странице
         * @default 100
         */
        limit?: number;
        /**
         * Все проекты, или где состоит пользователь
         * @default false
         */
        all?: boolean;
        /** Поле для сортировки */
        order_by?: string;
        /**
         * Направление сортировки: true - по убыванию, false - по возрастанию
         * @default false
         */
        desc?: boolean;
        /** Строка для поиска */
        search_query?: string;
      },
      reqParams: RequestParams = {},
    ) =>
      this.request<
        DaoPaginationResponse & {
          result?: DtoProjectLight[];
        },
        ApierrorsDefinedError
      >({
        path: `/api/auth/admin/users/${userId}/workspaces/${workspaceId}`,
        method: "GET",
        query: query,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...reqParams,
      }),

    /**
     * @description Метод позволяет обновить роль участника рабочего пространства. Если участник отсутствует, он будет создан.
     *
     * @tags AdminPanel
     * @name AuthAdminUsersWorkspacesMemberCreate
     * @summary Пользователи: Обновить роль участника пространства
     * @request POST:/api/auth/admin/users/{userId}/workspaces/{workspaceId}/member/
     */
    authAdminUsersWorkspacesMemberCreate: (
      workspaceId: string,
      userId: string,
      body: AiplanRoleUpdRequest,
      reqParams: RequestParams = {},
    ) =>
      this.request<void, ApierrorsDefinedError>({
        path: `/api/auth/admin/users/${userId}/workspaces/${workspaceId}/member/`,
        method: "POST",
        body: body,
        type: ContentType.Json,
        ...reqParams,
      }),

    /**
     * @description Удаляет участника рабочего пространства, а также все его связи с проектами внутри данного пространства.
     *
     * @tags AdminPanel
     * @name AuthAdminUsersWorkspacesMemberDelete
     * @summary Пользователи: Удалить участника пространства
     * @request DELETE:/api/auth/admin/users/{userId}/workspaces/{workspaceId}/member/
     */
    authAdminUsersWorkspacesMemberDelete: (
      workspaceId: string,
      userId: string,
      reqParams: RequestParams = {},
    ) =>
      this.request<void, ApierrorsDefinedError>({
        path: `/api/auth/admin/users/${userId}/workspaces/${workspaceId}/member/`,
        method: "DELETE",
        type: ContentType.Json,
        ...reqParams,
      }),

    /**
     * @description Метод обновляет роль участника проекта в рамках рабочего пространства. Если участник не найден в проекте, он будет создан. Проверяется, что участник является членом рабочего пространства.
     *
     * @tags AdminPanel
     * @name AuthAdminUsersWorkspacesProjectsMemberCreate
     * @summary Пользователи: Обновить роль участника проекта
     * @request POST:/api/auth/admin/users/{userId}/workspaces/{workspaceId}/projects/{projectId}/member/
     */
    authAdminUsersWorkspacesProjectsMemberCreate: (
      workspaceId: string,
      userId: string,
      projectId: string,
      body: AiplanRoleUpdRequest,
      reqParams: RequestParams = {},
    ) =>
      this.request<void, ApierrorsDefinedError>({
        path: `/api/auth/admin/users/${userId}/workspaces/${workspaceId}/projects/${projectId}/member/`,
        method: "POST",
        body: body,
        type: ContentType.Json,
        ...reqParams,
      }),

    /**
     * @description Метод удаляет участника проекта из рабочего пространства. Если участник не найден в проекте, возвращается ошибка.
     *
     * @tags AdminPanel
     * @name AuthAdminUsersWorkspacesProjectsMemberDelete
     * @summary Пользователи: Удалить участника проекта
     * @request DELETE:/api/auth/admin/users/{userId}/workspaces/{workspaceId}/projects/{projectId}/member/
     */
    authAdminUsersWorkspacesProjectsMemberDelete: (
      workspaceId: string,
      userId: string,
      projectId: string,
      reqParams: RequestParams = {},
    ) =>
      this.request<void, ApierrorsDefinedError>({
        path: `/api/auth/admin/users/${userId}/workspaces/${workspaceId}/projects/${projectId}/member/`,
        method: "DELETE",
        type: ContentType.Json,
        ...reqParams,
      }),

    /**
     * @description Возвращает список всех рабочих пространств с поддержкой пагинации, сортировки и поиска
     *
     * @tags AdminPanel
     * @name GetAllWorkspaceList
     * @summary Пространство: получение всех рабочих пространств
     * @request GET:/api/auth/admin/workspaces
     * @secure
     */
    getAllWorkspaceList: (
      query?: {
        /**
         * Смещение для пагинации
         * @default 0
         */
        offset?: number;
        /**
         * Количество результатов на странице
         * @default 100
         */
        limit?: number;
        /** Поле для сортировки */
        order_by?: string;
        /**
         * Направление сортировки: true - по убыванию, false - по возрастанию
         * @default false
         */
        desc?: boolean;
        /** Строка для поиска */
        search_query?: string;
      },
      reqParams: RequestParams = {},
    ) =>
      this.request<
        DaoPaginationResponse & {
          result?: DtoWorkspaceWithCount[];
        },
        ApierrorsDefinedError
      >({
        path: `/api/auth/admin/workspaces`,
        method: "GET",
        query: query,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...reqParams,
      }),
  };
  releaseNotes = {
    /**
     * @description Возвращает информацию о примечании к релизу по ID
     *
     * @tags ReleaseNotes
     * @name GetReleaseNote
     * @summary Релизы: получение примечания к релизу
     * @request GET:/api/auth/admin/release-notes/{noteId}
     * @secure
     */
    getReleaseNote: (noteId: string, reqParams: RequestParams = {}) =>
      this.request<DtoReleaseNoteLight, ApierrorsDefinedError>({
        path: `/api/auth/admin/release-notes/${noteId}`,
        method: "GET",
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...reqParams,
      }),

    /**
     * @description Возвращает список обновлений
     *
     * @tags ReleaseNotes
     * @name GetProductUpdateList
     * @summary Релизы: получение списка обновлений
     * @request GET:/api/auth/release-notes/
     * @secure
     */
    getProductUpdateList: (reqParams: RequestParams = {}) =>
      this.request<DtoReleaseNoteLight[], ApierrorsDefinedError>({
        path: `/api/auth/release-notes/`,
        method: "GET",
        secure: true,
        format: "json",
        ...reqParams,
      }),

    /**
     * @description Возвращает информацию о примечаниях к релизу
     *
     * @tags ReleaseNotes
     * @name GetRecentReleaseNoteList
     * @summary Релизы: получение примечаний к релизу начиная с указанной версии
     * @request GET:/api/auth/release-notes/{noteId}
     * @secure
     */
    getRecentReleaseNoteList: (noteId: string, reqParams: RequestParams = {}) =>
      this.request<DtoReleaseNoteLight[], ApierrorsDefinedError>({
        path: `/api/auth/release-notes/${noteId}`,
        method: "GET",
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...reqParams,
      }),
  };
  users = {
    /**
     * @description Позволяет текущему пользователю изменить свой пароль. В случае успеха завершает все активные сеансы пользователя.
     *
     * @tags Users
     * @name UpdateMyPassword
     * @summary Пользователи (управление доступом): смена пароля текущего пользователя
     * @request POST:/api/auth/change-my-password/
     * @secure
     */
    updateMyPassword: (
      data: AiplanPasswordRequest,
      reqParams: RequestParams = {},
    ) =>
      this.request<AiplanPasswordResponse, ApierrorsDefinedError>({
        path: `/api/auth/change-my-password/`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...reqParams,
      }),

    /**
     * @description Отправляет запрос на восстановление пароля для указанного email. Возвращает статус 200 даже если пользователь не найден или неактивен для повышения безопасности.
     *
     * @tags Users
     * @name ForgotPassword
     * @summary Пользователи (управление доступом): запрос на восстановление пароля
     * @request POST:/api/auth/forgot-password/
     */
    forgotPassword: (
      data: AiplanEmailCaptchaRequest,
      reqParams: RequestParams = {},
    ) =>
      this.request<void, ApierrorsDefinedError>({
        path: `/api/auth/forgot-password/`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...reqParams,
      }),

    /**
     * @description Позволяет пользователю сбросить пароль после перехода по ссылке из письма. Сбрасывает все активные сеансы пользователя после успешного обновления пароля.
     *
     * @tags Users
     * @name ResetPassword
     * @summary Пользователи (управление доступом): сброс пароля по ссылке из почты
     * @request POST:/api/auth/reset-password/{uidb64}/{token}/
     */
    resetPassword: (
      uidb64: string,
      token: string,
      data: AiplanPasswordRequest,
      reqParams: RequestParams = {},
    ) =>
      this.request<AiplanPasswordResponse, ApierrorsDefinedError>({
        path: `/api/auth/reset-password/${uidb64}/${token}/`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...reqParams,
      }),

    /**
     * @description Позволяет суперпользователю изменить пароль другого пользователя, идентифицированного через `uidb64`.
     *
     * @tags Users
     * @name ResetUserPassword
     * @summary Пользователи (управление доступом): смена пароля другого пользователя (только для суперпользователя)
     * @request POST:/api/auth/reset-user-password/{uidb64}/
     * @secure
     */
    resetUserPassword: (
      uidb64: string,
      data: AiplanPasswordRequest,
      reqParams: RequestParams = {},
    ) =>
      this.request<AiplanPasswordResponse, ApierrorsDefinedError>({
        path: `/api/auth/reset-user-password/${uidb64}/`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...reqParams,
      }),

    /**
     * @description Завершает все активные сессии пользователя, обновляя время и IP последнего выхода. Если refresh-токен отсутствует, возвращает ошибку.
     *
     * @tags Users
     * @name SignOutEverywhere
     * @summary Пользователи (управление доступом): выход из всех сессий
     * @request POST:/api/auth/sign-out-everywhere/
     * @secure
     */
    signOutEverywhere: (reqParams: RequestParams = {}) =>
      this.request<void, ApierrorsDefinedError>({
        path: `/api/auth/sign-out-everywhere/`,
        method: "POST",
        secure: true,
        ...reqParams,
      }),

    /**
     * @description Завершает текущую сессию пользователя, обновляя время и IP последнего выхода. Если refresh-токен отсутствует, возвращает ошибку.
     *
     * @tags Users
     * @name SignOut
     * @summary Пользователи (управление доступом): выход из текущей сессии
     * @request POST:/api/auth/sign-out/
     * @secure
     */
    signOut: (reqParams: RequestParams = {}) =>
      this.request<void, ApierrorsDefinedError>({
        path: `/api/auth/sign-out/`,
        method: "POST",
        secure: true,
        ...reqParams,
      }),

    /**
     * @description Возвращает список последних 100 действий текущего пользователя из смежных пространств с текущим пользователем, если он не суперюзер
     *
     * @tags Users
     * @name GetUserActivityList
     * @summary Пользователи: получение последних действий указанного пользователя
     * @request GET:/api/auth/users/:userId/activities/
     * @secure
     */
    getUserActivityList: (
      userId: string,
      query?: {
        /**
         * День выборки активностей
         * @default """"
         */
        day?: string;
        /**
         * Смещение для пагинации
         * @default -1
         */
        offset?: number;
        /**
         * Лимит результатов
         * @default 100
         */
        limit?: number;
      },
      reqParams: RequestParams = {},
    ) =>
      this.request<
        DaoPaginationResponse & {
          result?: DtoEntityActivityFull[];
        },
        ApierrorsDefinedError
      >({
        path: `/api/auth/users/${userId}/activities/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...reqParams,
      }),

    /**
     * @description Возвращает информацию о текущем пользователе
     *
     * @tags Users
     * @name GetCurrentUser
     * @summary Пользователи: получение данных о текущем пользователе
     * @request GET:/api/auth/users/me/
     * @secure
     */
    getCurrentUser: (reqParams: RequestParams = {}) =>
      this.request<DtoUser, ApierrorsDefinedError>({
        path: `/api/auth/users/me/`,
        method: "GET",
        secure: true,
        format: "json",
        ...reqParams,
      }),

    /**
     * @description Обновляет информацию о текущем пользователе
     *
     * @tags Users
     * @name UpdateCurrentUser
     * @summary Пользователи: обновление данных о текущем пользователе
     * @request PATCH:/api/auth/users/me/
     * @secure
     */
    updateCurrentUser: (
      data: AiplanUserUpdateRequest,
      reqParams: RequestParams = {},
    ) =>
      this.request<DtoUser, ApierrorsDefinedError>({
        path: `/api/auth/users/me/`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...reqParams,
      }),

    /**
     * @description Возвращает список последних 100 действий текущего пользователя
     *
     * @tags Users
     * @name GetMyActivityList
     * @summary Пользователи: получение последних действий пользователя
     * @request GET:/api/auth/users/me/activities/
     * @secure
     */
    getMyActivityList: (
      query?: {
        /**
         * День выборки активностей
         * @default """"
         */
        day?: string;
        /**
         * Смещение для пагинации
         * @default -1
         */
        offset?: number;
        /**
         * Лимит результатов
         * @default 100
         */
        limit?: number;
        /** Workspace IDs */
        workspace?: string[];
        /** Project IDs */
        project?: string[];
      },
      reqParams: RequestParams = {},
    ) =>
      this.request<
        DaoPaginationResponse & {
          result?: DtoEntityActivityFull[];
        },
        ApierrorsDefinedError
      >({
        path: `/api/auth/users/me/activities/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...reqParams,
      }),

    /**
     * @description Возвращает таблицу активностей пользователя за указанный период.
     *
     * @tags Users
     * @name GetMyActivitiesTable
     * @summary Пользователи: получение таблицы активностей пользователя
     * @request GET:/api/auth/users/me/activities/table/
     * @secure
     */
    getMyActivitiesTable: (
      query: {
        /** Начальная дата периода в формате YYYY-MM-DD */
        from: string;
        /** Конечная дата периода в формате YYYY-MM-DD */
        to: string;
        /** Workspace IDs */
        workspace?: string[];
        /** Project IDs */
        project?: string[];
      },
      reqParams: RequestParams = {},
    ) =>
      this.request<TypesActivityTable, ApierrorsDefinedError>({
        path: `/api/auth/users/me/activities/table/`,
        method: "GET",
        query: query,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...reqParams,
      }),

    /**
     * @description Возвращает список всех проектов, к которым принадлежит текущий пользователь, с возможностью поиска по имени
     *
     * @tags Users
     * @name GetCurrentUserAllProjectList
     * @summary Пользователи: получение всех проектов текущего пользователя
     * @request GET:/api/auth/users/me/all/projects/
     * @secure
     */
    getCurrentUserAllProjectList: (
      query?: {
        /** Строка поиска по имени проекта */
        search_query?: string;
      },
      reqParams: RequestParams = {},
    ) =>
      this.request<DtoProjectLight[], ApierrorsDefinedError>({
        path: `/api/auth/users/me/all/projects/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...reqParams,
      }),

    /**
     * @description Обновляет аватар текущего пользователя
     *
     * @tags Users
     * @name UpdateCurrentUserAvatar
     * @summary Пользователи: обновление аватара текущего пользователя
     * @request POST:/api/auth/users/me/avatar/
     * @secure
     */
    updateCurrentUserAvatar: (
      data: {
        /**
         * Файл аватара
         * @format binary
         */
        file: File;
      },
      reqParams: RequestParams = {},
    ) =>
      this.request<DtoUser, ApierrorsDefinedError>({
        path: `/api/auth/users/me/avatar/`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.FormData,
        format: "json",
        ...reqParams,
      }),

    /**
     * @description Удаляет аватар текущего пользователя
     *
     * @tags Users
     * @name DeleteCurrentUserAvatar
     * @summary Пользователи: удаление аватара текущего пользователя
     * @request DELETE:/api/auth/users/me/avatar/
     * @secure
     */
    deleteCurrentUserAvatar: (reqParams: RequestParams = {}) =>
      this.request<DtoUser, ApierrorsDefinedError>({
        path: `/api/auth/users/me/avatar/`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...reqParams,
      }),

    /**
     * @description Позволяет текущему пользователю изменить свой Email. В случае успеха отправляет код верификации на новую почту.
     *
     * @tags Users
     * @name ChangeMyEmail
     * @summary Пользователи (управление доступом): смена email текущего пользователя
     * @request POST:/api/auth/users/me/change-email/
     * @secure
     */
    changeMyEmail: (data: AiplanEmailRequest, reqParams: RequestParams = {}) =>
      this.request<void, ApierrorsDefinedError>({
        path: `/api/auth/users/me/change-email/`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...reqParams,
      }),

    /**
     * @description Возвращает отзыв, оставленный текущим пользователем
     *
     * @tags Users
     * @name GetMyFeedback
     * @summary Пользователи: получение отзыва текущего пользователя
     * @request GET:/api/auth/users/me/feedback/
     * @secure
     */
    getMyFeedback: (reqParams: RequestParams = {}) =>
      this.request<DtoUserFeedback, ApierrorsDefinedError>({
        path: `/api/auth/users/me/feedback/`,
        method: "GET",
        secure: true,
        format: "json",
        ...reqParams,
      }),

    /**
     * @description Сохраняет или обновляет отзыв, предоставленный текущим пользователем
     *
     * @tags Users
     * @name CreateMyFeedback
     * @summary Пользователи: отправка отзыва от текущего пользователя
     * @request POST:/api/auth/users/me/feedback/
     * @secure
     */
    createMyFeedback: (
      data: AiplanPostFeedbackRequest,
      reqParams: RequestParams = {},
    ) =>
      this.request<void, ApierrorsDefinedError>({
        path: `/api/auth/users/me/feedback/`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...reqParams,
      }),

    /**
     * @description Удаляет отзыв, предоставленную текущим пользователем
     *
     * @tags Users
     * @name DeleteMyFeedback
     * @summary Пользователи: удаление отзыва текущего пользователя
     * @request DELETE:/api/auth/users/me/feedback/
     * @secure
     */
    deleteMyFeedback: (reqParams: RequestParams = {}) =>
      this.request<void, ApierrorsDefinedError>({
        path: `/api/auth/users/me/feedback/`,
        method: "DELETE",
        secure: true,
        ...reqParams,
      }),

    /**
     * @description Обновляет статус онбординга текущего пользователя и сохраняет его данные
     *
     * @tags Users
     * @name UpdateUserOnBoard
     * @summary Пользователи: онбординг пользователя
     * @request POST:/api/auth/users/me/onboard/
     * @secure
     */
    updateUserOnBoard: (data: DtoUser, reqParams: RequestParams = {}) =>
      this.request<DtoUser, void | ApierrorsDefinedError>({
        path: `/api/auth/users/me/onboard/`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...reqParams,
      }),

    /**
     * @description Возвращает текущий токен авторизации пользователя, если он существует
     *
     * @tags Users
     * @name GetMyAuthToken
     * @summary Пользователи (управление доступом): получение текущего токена авторизации пользователя
     * @request GET:/api/auth/users/me/token/
     * @secure
     */
    getMyAuthToken: (reqParams: RequestParams = {}) =>
      this.request<string, ApierrorsDefinedError>({
        path: `/api/auth/users/me/token/`,
        method: "GET",
        secure: true,
        ...reqParams,
      }),

    /**
     * @description Создает новый токен авторизации для текущего пользователя и возвращает успешный ответ
     *
     * @tags Users
     * @name ResetMyAuthToken
     * @summary Пользователи (управление доступом): сброс токена авторизации пользователя
     * @request POST:/api/auth/users/me/token/reset/
     * @secure
     */
    resetMyAuthToken: (reqParams: RequestParams = {}) =>
      this.request<void, ApierrorsDefinedError>({
        path: `/api/auth/users/me/token/reset/`,
        method: "POST",
        secure: true,
        ...reqParams,
      }),

    /**
     * @description Позволяет текущему пользователю изменить свой Email. Сравнивает код верификации отправленый на новый Email.
     *
     * @tags Users
     * @name VerifyMyEmail
     * @summary Пользователи (управление доступом): Верификация Email
     * @request POST:/api/auth/users/me/verification-email/
     * @secure
     */
    verifyMyEmail: (
      data: AiplanEmailVerifyRequest,
      reqParams: RequestParams = {},
    ) =>
      this.request<void, ApierrorsDefinedError>({
        path: `/api/auth/users/me/verification-email/`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...reqParams,
      }),

    /**
     * @description Обновляет свойства представления текущего пользователя
     *
     * @tags Users
     * @name UpdateUserViewProps
     * @summary Пользователи: обновление пользовательских настроек представления
     * @request POST:/api/auth/users/me/view-props/
     * @secure
     */
    updateUserViewProps: (
      data: TypesViewProps,
      reqParams: RequestParams = {},
    ) =>
      this.request<void, ApierrorsDefinedError>({
        path: `/api/auth/users/me/view-props/`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...reqParams,
      }),

    /**
     * @description Возвращает информацию о пользователе по его ID
     *
     * @tags Users
     * @name GetUser
     * @summary Пользователи: получение пользователя по ID
     * @request GET:/api/auth/users/{userId}
     * @secure
     */
    getUser: (userId: string, reqParams: RequestParams = {}) =>
      this.request<DtoUserLight, ApierrorsDefinedError>({
        path: `/api/auth/users/${userId}`,
        method: "GET",
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...reqParams,
      }),

    /**
     * @description Возвращает таблицу активностей пользователя за указанный период.
     *
     * @tags Users
     * @name GetUserActivitiesTable
     * @summary Пользователи: получение таблицы активностей указанного пользователя
     * @request GET:/api/auth/users/{userId}/activities/table/
     * @secure
     */
    getUserActivitiesTable: (
      userId: string,
      query: {
        /** Начальная дата периода в формате YYYY-MM-DD */
        from: string;
        /** Конечная дата периода в формате YYYY-MM-DD */
        to: string;
      },
      reqParams: RequestParams = {},
    ) =>
      this.request<TypesActivityTable, ApierrorsDefinedError>({
        path: `/api/auth/users/${userId}/activities/table/`,
        method: "GET",
        query: query,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...reqParams,
      }),

    /**
     * @description Генерирует и возвращает вызов капчи для пользователя
     *
     * @tags Users
     * @name RequestCaptcha
     * @summary Пользователи (управление доступом): запрос капчи для пользователя
     * @request GET:/api/captcha
     */
    requestCaptcha: (reqParams: RequestParams = {}) =>
      this.request<AltchaChallenge, ApierrorsDefinedError>({
        path: `/api/captcha`,
        method: "GET",
        type: ContentType.Json,
        format: "json",
        ...reqParams,
      }),

    /**
     * @description Аутентифицирует пользователя с использованием email и пароля, с проверкой капчи
     *
     * @tags Users
     * @name EmailLogin
     * @summary Пользователи (управление доступом): вход пользователя
     * @request POST:/api/sign-in
     */
    emailLogin: (data: AiplanLoginRequest, reqParams: RequestParams = {}) =>
      this.request<Record<string, any>, ApierrorsDefinedError>({
        path: `/api/sign-in`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...reqParams,
      }),

    /**
     * @description Регистрирует нового пользователя по email, проверяет капчу и отправляет временный пароль по email
     *
     * @tags Users
     * @name SignUp
     * @summary Пользователи (управление доступом): регистрация нового пользователя
     * @request POST:/api/sign-up/
     */
    signUp: (data: AiplanEmailCaptchaRequest, reqParams: RequestParams = {}) =>
      this.request<void, ApierrorsDefinedError>({
        path: `/api/sign-up/`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...reqParams,
      }),
  };
  searchFilters = {
    /**
     * @description Возвращает список доступных фильтров поиска с возможностью пагинации и поиска по имени
     *
     * @tags Search Filters
     * @name GetSearchFilterList
     * @summary Фильтры: получение списка доступных фильтров поиска
     * @request GET:/api/auth/filters/
     * @secure
     */
    getSearchFilterList: (
      query?: {
        /**
         * Смещение для пагинации
         * @default -1
         */
        offset?: number;
        /**
         * Лимит результатов
         * @default 100
         */
        limit?: number;
        /** Строка поиска по имени фильтра */
        search_query?: string;
      },
      reqParams: RequestParams = {},
    ) =>
      this.request<
        DaoPaginationResponse & {
          result?: DtoSearchFilterLight[];
        },
        ApierrorsDefinedError
      >({
        path: `/api/auth/filters/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...reqParams,
      }),

    /**
     * @description Создает новый фильтр поиска для текущего пользователя
     *
     * @tags Search Filters
     * @name CreateSearchFilter
     * @summary Фильтры: создание нового фильтра поиска
     * @request POST:/api/auth/filters/
     * @secure
     */
    createSearchFilter: (
      data: DtoSearchFilterLight,
      reqParams: RequestParams = {},
    ) =>
      this.request<DtoSearchFilterFull, ApierrorsDefinedError>({
        path: `/api/auth/filters/`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...reqParams,
      }),

    /**
     * @description Возвращает данные фильтра поиска по его ID
     *
     * @tags Search Filters
     * @name GetSearchFilter
     * @summary Фильтры: получение фильтра поиска
     * @request GET:/api/auth/filters/{filterId}/
     * @secure
     */
    getSearchFilter: (filterId: string, reqParams: RequestParams = {}) =>
      this.request<DtoSearchFilterFull, ApierrorsDefinedError>({
        path: `/api/auth/filters/${filterId}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...reqParams,
      }),

    /**
     * @description Удаляет фильтр поиска по его ID для текущего пользователя или суперпользователя
     *
     * @tags Search Filters
     * @name DeleteSearchFilter
     * @summary Фильтры: удаление фильтра поиска
     * @request DELETE:/api/auth/filters/{filterId}/
     * @secure
     */
    deleteSearchFilter: (filterId: string, reqParams: RequestParams = {}) =>
      this.request<void, ApierrorsDefinedError>({
        path: `/api/auth/filters/${filterId}/`,
        method: "DELETE",
        secure: true,
        ...reqParams,
      }),

    /**
     * @description Обновляет фильтр поиска по его ID для текущего пользователя
     *
     * @tags Search Filters
     * @name UpdateSearchFilter
     * @summary Фильтры: обновление фильтра поиска
     * @request PATCH:/api/auth/filters/{filterId}/
     * @secure
     */
    updateSearchFilter: (
      filterId: string,
      data: DtoSearchFilterLight,
      reqParams: RequestParams = {},
    ) =>
      this.request<void, ApierrorsDefinedError>({
        path: `/api/auth/filters/${filterId}/`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...reqParams,
      }),

    /**
     * @description Возвращает список фильтров поиска, созданных текущим пользователем
     *
     * @tags Search Filters
     * @name GetMySearchFilterList
     * @summary Фильтры: получение фильтров поиска текущего пользователя
     * @request GET:/api/auth/users/me/filters/
     * @secure
     */
    getMySearchFilterList: (reqParams: RequestParams = {}) =>
      this.request<DtoSearchFilterFull[], ApierrorsDefinedError>({
        path: `/api/auth/users/me/filters/`,
        method: "GET",
        secure: true,
        format: "json",
        ...reqParams,
      }),

    /**
     * @description Добавляет указанный фильтр поиска в список доступных фильтров текущего пользователя
     *
     * @tags Search Filters
     * @name AddSearchFilterToMe
     * @summary Фильтры: добавление фильтра поиска в список текущего пользователя
     * @request POST:/api/auth/users/me/filters/{filterId}/
     * @secure
     */
    addSearchFilterToMe: (filterId: string, reqParams: RequestParams = {}) =>
      this.request<void, ApierrorsDefinedError>({
        path: `/api/auth/users/me/filters/${filterId}/`,
        method: "POST",
        secure: true,
        ...reqParams,
      }),

    /**
     * @description Удаляет указанный фильтр поиска из списка доступных фильтров текущего пользователя
     *
     * @tags Search Filters
     * @name DeleteSearchFilterFromMe
     * @summary Фильтры: удаление фильтра поиска из списка текущего пользователя
     * @request DELETE:/api/auth/users/me/filters/{filterId}/
     * @secure
     */
    deleteSearchFilterFromMe: (
      filterId: string,
      reqParams: RequestParams = {},
    ) =>
      this.request<void, ApierrorsDefinedError>({
        path: `/api/auth/users/me/filters/${filterId}/`,
        method: "DELETE",
        secure: true,
        ...reqParams,
      }),
  };
  projects = {
    /**
     * @description Возвращает список тегов для указанных проектов с возможностью поиска по названию тега или проекта
     *
     * @tags Projects
     * @name GetFilterLabelList
     * @summary Проекты: получение списка тегов (меток) выбранных проектов
     * @request POST:/api/auth/filters/labels/
     * @secure
     */
    getFilterLabelList: (
      data: AiplanFilterParams,
      query?: {
        /**
         * Смещение для пагинации
         * @default 0
         */
        offset?: number;
        /**
         * Лимит записей
         * @default 100
         */
        limit?: number;
      },
      reqParams: RequestParams = {},
    ) =>
      this.request<
        DaoPaginationResponse & {
          result?: DtoLabelLight[];
        },
        ApierrorsDefinedError
      >({
        path: `/api/auth/filters/labels/`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...reqParams,
      }),

    /**
     * @description Возвращает список участников (пользователей) для указанных проектов с возможностью поиска по имени пользователя.
     *
     * @tags Projects
     * @name GetFilterMemberList
     * @summary Проекты: получение списка участников выбранных проектов
     * @request POST:/api/auth/filters/members/
     * @secure
     */
    getFilterMemberList: (
      data: AiplanFilterParams,
      query?: {
        /**
         * Смещение для пагинации
         * @default 0
         */
        offset?: number;
        /**
         * Лимит записей
         * @default 100
         */
        limit?: number;
      },
      reqParams: RequestParams = {},
    ) =>
      this.request<
        DaoPaginationResponse & {
          result?: DtoUserLight[];
        },
        ApierrorsDefinedError
      >({
        path: `/api/auth/filters/members/`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...reqParams,
      }),

    /**
     * @description Возвращает список статусов для указанных проектов с возможностью поиска по названию статуса или проекта
     *
     * @tags Projects
     * @name GetFilterStateList
     * @summary Проекты: получение списка статусов выбранных проектов
     * @request POST:/api/auth/filters/states/
     * @secure
     */
    getFilterStateList: (
      data: AiplanFilterParams,
      query?: {
        /**
         * Смещение для пагинации
         * @default 0
         */
        offset?: number;
        /**
         * Лимит записей
         * @default 100
         */
        limit?: number;
      },
      reqParams: RequestParams = {},
    ) =>
      this.request<
        DaoPaginationResponse & {
          result?: DtoStateLight[];
        },
        ApierrorsDefinedError
      >({
        path: `/api/auth/filters/states/`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...reqParams,
      }),

    /**
     * @description Возвращает информацию о том, существует ли идентификатор проекта в указанном рабочем пространстве.
     *
     * @tags Projects
     * @name CheckProjectIdentifierAvailability
     * @summary Проекты: проверка идентификатора проекта на уникальность
     * @request GET:/api/auth/workspaces/{workspaceSlug}/project-identifiers
     * @secure
     */
    checkProjectIdentifierAvailability: (
      workspaceSlug: string,
      query: {
        /** Идентификатор проекта */
        name: string;
      },
      reqParams: RequestParams = {},
    ) =>
      this.request<
        AiplanCheckProjectIdentifierAvailabilityResponse,
        ApierrorsDefinedError
      >({
        path: `/api/auth/workspaces/${workspaceSlug}/project-identifiers`,
        method: "GET",
        query: query,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...reqParams,
      }),

    /**
     * @description Возвращает список всех проектов в рабочем пространстве, к которым у пользователя есть доступ.
     *
     * @tags Projects
     * @name GetProjectList
     * @summary Проекты: получение списка проектов
     * @request GET:/api/auth/workspaces/{workspaceSlug}/projects
     * @secure
     */
    getProjectList: (
      workspaceSlug: string,
      query?: {
        /** Поисковый запрос для фильтрации проектов по названию */
        search_query?: string;
      },
      reqParams: RequestParams = {},
    ) =>
      this.request<DtoProjectLight[], ApierrorsDefinedError>({
        path: `/api/auth/workspaces/${workspaceSlug}/projects`,
        method: "GET",
        query: query,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...reqParams,
      }),

    /**
     * @description Создает новый проект в рабочем пространстве. Необходимы права на создание проектов.
     *
     * @tags Projects
     * @name CreateProject
     * @summary Проекты: создание проекта
     * @request POST:/api/auth/workspaces/{workspaceSlug}/projects
     * @secure
     */
    createProject: (
      workspaceSlug: string,
      request: AiplanCreateProjectRequest,
      reqParams: RequestParams = {},
    ) =>
      this.request<DtoProject, ApierrorsDefinedError>({
        path: `/api/auth/workspaces/${workspaceSlug}/projects`,
        method: "POST",
        body: request,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...reqParams,
      }),

    /**
     * @description Позволяет пользователю присоединиться к нескольким проектам в рабочем пространстве.
     *
     * @tags Projects
     * @name JoinProjects
     * @summary Проекты: подключение пользователя к списку проектов
     * @request POST:/api/auth/workspaces/{workspaceSlug}/projects/join/
     * @secure
     */
    joinProjects: (
      workspaceSlug: string,
      projects: AiplanJoinProjectsRequest,
      reqParams: RequestParams = {},
    ) =>
      this.request<AiplanJoinProjectsSuccessResponse, ApierrorsDefinedError>({
        path: `/api/auth/workspaces/${workspaceSlug}/projects/join/`,
        method: "POST",
        body: projects,
        secure: true,
        type: ContentType.Json,
        ...reqParams,
      }),

    /**
     * @description Возвращает информацию о проекте по его идентификатору.
     *
     * @tags Projects
     * @name GetProject
     * @summary Проекты: получение проекта
     * @request GET:/api/auth/workspaces/{workspaceSlug}/projects/{projectId}
     * @secure
     */
    getProject: (
      workspaceSlug: string,
      projectId: string,
      reqParams: RequestParams = {},
    ) =>
      this.request<DtoProject, ApierrorsDefinedError>({
        path: `/api/auth/workspaces/${workspaceSlug}/projects/${projectId}`,
        method: "GET",
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...reqParams,
      }),

    /**
     * @description Удаляет проект, если у пользователя есть соответствующие права.
     *
     * @tags Projects
     * @name DeleteProject
     * @summary Проекты: удаление проекта
     * @request DELETE:/api/auth/workspaces/{workspaceSlug}/projects/{projectId}
     * @secure
     */
    deleteProject: (
      workspaceSlug: string,
      projectId: string,
      reqParams: RequestParams = {},
    ) =>
      this.request<void, ApierrorsDefinedError>({
        path: `/api/auth/workspaces/${workspaceSlug}/projects/${projectId}`,
        method: "DELETE",
        secure: true,
        type: ContentType.Json,
        ...reqParams,
      }),

    /**
     * @description Обновляет информацию о проекте, включая название, ответственного и списки наблюдателей и исполнителей.
     *
     * @tags Projects
     * @name UpdateProject
     * @summary Проекты: изменение проекта
     * @request PATCH:/api/auth/workspaces/{workspaceSlug}/projects/{projectId}
     * @secure
     */
    updateProject: (
      workspaceSlug: string,
      projectId: string,
      project: DtoProject,
      reqParams: RequestParams = {},
    ) =>
      this.request<DtoProject, ApierrorsDefinedError>({
        path: `/api/auth/workspaces/${workspaceSlug}/projects/${projectId}`,
        method: "PATCH",
        body: project,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...reqParams,
      }),

    /**
     * @description Возвращает список активностей для указанного проекта с возможностью пагинации.
     *
     * @tags Projects
     * @name GetProjectActivityList
     * @summary Проекты: получение активностей рабочего проекта
     * @request GET:/api/auth/workspaces/{workspaceSlug}/projects/{projectId}/activities
     * @secure
     */
    getProjectActivityList: (
      workspaceSlug: string,
      projectId: string,
      query?: {
        /**
         * Смещение для пагинации
         * @default 0
         */
        offset?: number;
        /**
         * Количество записей на странице
         * @default 100
         */
        limit?: number;
      },
      reqParams: RequestParams = {},
    ) =>
      this.request<
        DaoPaginationResponse & {
          result?: DtoEntityActivityFull[];
        },
        ApierrorsDefinedError
      >({
        path: `/api/auth/workspaces/${workspaceSlug}/projects/${projectId}/activities`,
        method: "GET",
        query: query,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...reqParams,
      }),

    /**
     * @description Возвращает список всех тегов, связанных с проектом, с возможностью фильтрации по названию
     *
     * @tags Projects
     * @name GetIssueLabelList
     * @summary Проекты (теги): получение списка тегов
     * @request GET:/api/auth/workspaces/{workspaceSlug}/projects/{projectId}/issue-labels
     * @secure
     */
    getIssueLabelList: (
      workspaceSlug: string,
      projectId: string,
      query?: {
        /** Поисковый запрос для фильтрации тегов по названию */
        search_query?: string;
      },
      reqParams: RequestParams = {},
    ) =>
      this.request<DtoLabelLight[], ApierrorsDefinedError>({
        path: `/api/auth/workspaces/${workspaceSlug}/projects/${projectId}/issue-labels`,
        method: "GET",
        query: query,
        secure: true,
        ...reqParams,
      }),

    /**
     * @description Создает новый тег для проекта
     *
     * @tags Projects
     * @name CreateIssueLabel
     * @summary Проекты (теги): создание тега
     * @request POST:/api/auth/workspaces/{workspaceSlug}/projects/{projectId}/issue-labels
     * @secure
     */
    createIssueLabel: (
      workspaceSlug: string,
      projectId: string,
      data: DtoLabelLight,
      reqParams: RequestParams = {},
    ) =>
      this.request<DtoLabelLight, ApierrorsDefinedError>({
        path: `/api/auth/workspaces/${workspaceSlug}/projects/${projectId}/issue-labels`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...reqParams,
      }),

    /**
     * @description Возвращает данные тега по его ID
     *
     * @tags Projects
     * @name GetIssueLabel
     * @summary Проекты (теги): получение информации о теге
     * @request GET:/api/auth/workspaces/{workspaceSlug}/projects/{projectId}/issue-labels/{labelId}
     * @secure
     */
    getIssueLabel: (
      workspaceSlug: string,
      projectId: string,
      labelId: string,
      reqParams: RequestParams = {},
    ) =>
      this.request<DtoLabelLight, ApierrorsDefinedError>({
        path: `/api/auth/workspaces/${workspaceSlug}/projects/${projectId}/issue-labels/${labelId}`,
        method: "GET",
        secure: true,
        ...reqParams,
      }),

    /**
     * @description Удаляет тег по его ID из проекта
     *
     * @tags Projects
     * @name DeleteIssueLabel
     * @summary Проекты (теги): удаление тега
     * @request DELETE:/api/auth/workspaces/{workspaceSlug}/projects/{projectId}/issue-labels/{labelId}
     * @secure
     */
    deleteIssueLabel: (
      workspaceSlug: string,
      projectId: string,
      labelId: string,
      reqParams: RequestParams = {},
    ) =>
      this.request<void, ApierrorsDefinedError>({
        path: `/api/auth/workspaces/${workspaceSlug}/projects/${projectId}/issue-labels/${labelId}`,
        method: "DELETE",
        secure: true,
        ...reqParams,
      }),

    /**
     * @description Обновляет выбранные данные тега по его ID
     *
     * @tags Projects
     * @name UpdateIssueLabel
     * @summary Проекты (теги): обновление тега
     * @request PATCH:/api/auth/workspaces/{workspaceSlug}/projects/{projectId}/issue-labels/{labelId}
     * @secure
     */
    updateIssueLabel: (
      workspaceSlug: string,
      projectId: string,
      labelId: string,
      data: DtoLabelLight,
      reqParams: RequestParams = {},
    ) =>
      this.request<DtoLabelLight, ApierrorsDefinedError>({
        path: `/api/auth/workspaces/${workspaceSlug}/projects/${projectId}/issue-labels/${labelId}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...reqParams,
      }),

    /**
     * @description Загружает новый логотип для указанного проекта и обновляет запись в базе данных.
     *
     * @tags Projects
     * @name UpdateProjectLogo
     * @summary Проекты (логотип): обновление логотипа
     * @request POST:/api/auth/workspaces/{workspaceSlug}/projects/{projectId}/logo/
     * @secure
     */
    updateProjectLogo: (
      workspaceSlug: string,
      projectId: string,
      data: {
        /** Файл логотипа */
        file: File;
      },
      reqParams: RequestParams = {},
    ) =>
      this.request<DtoProject, ApierrorsDefinedError>({
        path: `/api/auth/workspaces/${workspaceSlug}/projects/${projectId}/logo/`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.FormData,
        format: "json",
        ...reqParams,
      }),

    /**
     * @description Удаляет логотип указанного проекта и обновляет запись в базе данных.
     *
     * @tags Projects
     * @name DeleteProjectLogo
     * @summary Проекты (логотип): удаление логотипа проекта
     * @request DELETE:/api/auth/workspaces/{workspaceSlug}/projects/{projectId}/logo/
     * @secure
     */
    deleteProjectLogo: (
      workspaceSlug: string,
      projectId: string,
      reqParams: RequestParams = {},
    ) =>
      this.request<DtoProject, ApierrorsDefinedError>({
        path: `/api/auth/workspaces/${workspaceSlug}/projects/${projectId}/logo/`,
        method: "DELETE",
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...reqParams,
      }),

    /**
     * @description Обновляет настройки уведомлений для текущего участника проекта.
     *
     * @tags Projects
     * @name UpdateMyNotifications
     * @summary Проекты (участники): обновление настроек уведомлений текущего участника проекта
     * @request POST:/api/auth/workspaces/{workspaceSlug}/projects/{projectId}/me/notifications/
     * @secure
     */
    updateMyNotifications: (
      workspaceSlug: string,
      projectId: string,
      notificationSettings: AiplanProjectNotificationRequest,
      reqParams: RequestParams = {},
    ) =>
      this.request<void, ApierrorsDefinedError>({
        path: `/api/auth/workspaces/${workspaceSlug}/projects/${projectId}/me/notifications/`,
        method: "POST",
        body: notificationSettings,
        secure: true,
        type: ContentType.Json,
        ...reqParams,
      }),

    /**
     * @description Возвращает список участников проекта с возможностью фильтрации по имени или электронной почте.
     *
     * @tags Projects
     * @name GetProjectMemberList
     * @summary Проекты (участники): получение списка участников проекта
     * @request GET:/api/auth/workspaces/{workspaceSlug}/projects/{projectId}/members
     * @secure
     */
    getProjectMemberList: (
      workspaceSlug: string,
      projectId: string,
      query?: {
        /**
         * Смещение для пагинации
         * @default -1
         */
        offset?: number;
        /**
         * Количество участников на странице
         * @default 100
         */
        limit?: number;
        /**
         * Поисковый запрос для фильтрации участников по имени или электронной почте
         * @default """"
         */
        search_query?: string;
        /**
         * Поле для сортировки
         * @default ""last_name""
         */
        order_by?: string;
        /**
         * Направление сортировки: true - по убыванию, false - по возрастанию
         * @default true
         */
        desc?: boolean;
        /**
         * Список полей для поиска
         * @default "["username", "email", "last_name", "first_name"]"
         */
        find_by?: string[];
      },
      reqParams: RequestParams = {},
    ) =>
      this.request<
        DaoPaginationResponse & {
          my_entity?: DtoProjectMemberLight;
          result?: DtoProjectMemberLight[];
        },
        ApierrorsDefinedError
      >({
        path: `/api/auth/workspaces/${workspaceSlug}/projects/${projectId}/members`,
        method: "GET",
        query: query,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...reqParams,
      }),

    /**
     * @description Добавляет нового участника в проект. Проверяет наличие пользователя в рабочем пространстве и уникальность его участия в проекте.
     *
     * @tags Projects
     * @name AddMemberToProject
     * @summary Проекты (участники): добавление участника в проект
     * @request POST:/api/auth/workspaces/{workspaceSlug}/projects/{projectId}/members/add
     * @secure
     */
    addMemberToProject: (
      workspaceSlug: string,
      projectId: string,
      memberId: DtoProjectMember,
      reqParams: RequestParams = {},
    ) =>
      this.request<DtoProjectMemberLight, ApierrorsDefinedError>({
        path: `/api/auth/workspaces/${workspaceSlug}/projects/${projectId}/members/add`,
        method: "POST",
        body: memberId,
        secure: true,
        type: ContentType.Json,
        ...reqParams,
      }),

    /**
     * @description Возвращает информацию о конкретном участнике проекта по его идентификатору.
     *
     * @tags Projects
     * @name GetProjectMember
     * @summary Проекты (участники): получение информации об участнике проекта
     * @request GET:/api/auth/workspaces/{workspaceSlug}/projects/{projectId}/members/{memberId}
     * @secure
     */
    getProjectMember: (
      workspaceSlug: string,
      projectId: string,
      memberId: string,
      reqParams: RequestParams = {},
    ) =>
      this.request<DtoProjectMemberLight, ApierrorsDefinedError>({
        path: `/api/auth/workspaces/${workspaceSlug}/projects/${projectId}/members/${memberId}`,
        method: "GET",
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...reqParams,
      }),

    /**
     * @description Удаляет участника проекта по его идентификатору. Проверяет права пользователя и ограничения на удаление.
     *
     * @tags Projects
     * @name DeleteProjectMember
     * @summary Проекты (участники): удаление участника из проекта
     * @request DELETE:/api/auth/workspaces/{workspaceSlug}/projects/{projectId}/members/{memberId}
     * @secure
     */
    deleteProjectMember: (
      workspaceSlug: string,
      projectId: string,
      memberId: string,
      reqParams: RequestParams = {},
    ) =>
      this.request<void, ApierrorsDefinedError>({
        path: `/api/auth/workspaces/${workspaceSlug}/projects/${projectId}/members/${memberId}`,
        method: "DELETE",
        secure: true,
        ...reqParams,
      }),

    /**
     * @description Обновляет роль участника проекта по его идентификатору. Проверяет, что обновление не нарушает ограничения по ролям и статусу участника.
     *
     * @tags Projects
     * @name UpdateProjectMember
     * @summary Проекты (участники): обновление роли участника проекта
     * @request PATCH:/api/auth/workspaces/{workspaceSlug}/projects/{projectId}/members/{memberId}
     * @secure
     */
    updateProjectMember: (
      workspaceSlug: string,
      projectId: string,
      memberId: string,
      role: Record<string, number>,
      reqParams: RequestParams = {},
    ) =>
      this.request<DtoProjectMemberLight, ApierrorsDefinedError>({
        path: `/api/auth/workspaces/${workspaceSlug}/projects/${projectId}/members/${memberId}`,
        method: "PATCH",
        body: role,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...reqParams,
      }),

    /**
     * @description Возвращает информацию о текущем пользователе как члене проекта.
     *
     * @tags Projects
     * @name GetProjectMemberMe
     * @summary Проекты: получение информации о членстве текущего пользователя в проекте
     * @request GET:/api/auth/workspaces/{workspaceSlug}/projects/{projectId}/project-members/me
     * @secure
     */
    getProjectMemberMe: (
      workspaceSlug: string,
      projectId: string,
      reqParams: RequestParams = {},
    ) =>
      this.request<DtoProjectMember, ApierrorsDefinedError>({
        path: `/api/auth/workspaces/${workspaceSlug}/projects/${projectId}/project-members/me`,
        method: "GET",
        secure: true,
        ...reqParams,
      }),

    /**
     * @description Позволяет пользователю установить настройки просмотра для конкретного проекта.
     *
     * @tags Projects
     * @name UpdateProjectView
     * @summary Проекты: установка фильтров для просмотра проектов
     * @request POST:/api/auth/workspaces/{workspaceSlug}/projects/{projectId}/project-views/
     * @secure
     */
    updateProjectView: (
      workspaceSlug: string,
      projectId: string,
      view_props: TypesViewProps,
      reqParams: RequestParams = {},
    ) =>
      this.request<string, ApierrorsDefinedError>({
        path: `/api/auth/workspaces/${workspaceSlug}/projects/${projectId}/project-views/`,
        method: "POST",
        body: view_props,
        secure: true,
        type: ContentType.Json,
        ...reqParams,
      }),

    /**
     * @description Получает логи правил проекта с возможностью фильтрации по типу и пагинации
     *
     * @tags Projects
     * @name GetRulesLog
     * @summary Проекты (логи): получение логов правил
     * @request POST:/api/auth/workspaces/{workspaceSlug}/projects/{projectId}/rules-log
     * @secure
     */
    getRulesLog: (
      workspaceSlug: string,
      projectId: string,
      data: AiplanGetRulesLogfilterRequest,
      query?: {
        /**
         * Смещение для пагинации
         * @default -1
         */
        offset?: number;
        /**
         * Лимит записей
         * @default 30
         */
        limit?: number;
      },
      reqParams: RequestParams = {},
    ) =>
      this.request<
        DaoPaginationResponse & {
          result?: DtoRulesLog[];
        },
        ApierrorsDefinedError
      >({
        path: `/api/auth/workspaces/${workspaceSlug}/projects/${projectId}/rules-log`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...reqParams,
      }),

    /**
     * @description Возвращает список всех статусов проекта с возможностью фильтрации по названию
     *
     * @tags Projects
     * @name GetStateList
     * @summary Проекты (статусы): получение статусов проекта
     * @request GET:/api/auth/workspaces/{workspaceSlug}/projects/{projectId}/states
     * @secure
     */
    getStateList: (
      workspaceSlug: string,
      projectId: string,
      query?: {
        /** Поисковый запрос для фильтрации статусов по названию */
        search_query?: string;
      },
      reqParams: RequestParams = {},
    ) =>
      this.request<Record<string, DtoStateLight[]>, ApierrorsDefinedError>({
        path: `/api/auth/workspaces/${workspaceSlug}/projects/${projectId}/states`,
        method: "GET",
        query: query,
        secure: true,
        ...reqParams,
      }),

    /**
     * @description Создает новый статус для проекта
     *
     * @tags Projects
     * @name CreateState
     * @summary Проекты (статусы): создание статуса
     * @request POST:/api/auth/workspaces/{workspaceSlug}/projects/{projectId}/states
     * @secure
     */
    createState: (
      workspaceSlug: string,
      projectId: string,
      data: DtoStateLight,
      reqParams: RequestParams = {},
    ) =>
      this.request<DtoStateLight, ApierrorsDefinedError>({
        path: `/api/auth/workspaces/${workspaceSlug}/projects/${projectId}/states`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...reqParams,
      }),

    /**
     * @description Возвращает данные статуса по его ID
     *
     * @tags Projects
     * @name GetState
     * @summary Проекты (статусы): получение информации о статусе
     * @request GET:/api/auth/workspaces/{workspaceSlug}/projects/{projectId}/states/{stateId}
     * @secure
     */
    getState: (
      workspaceSlug: string,
      projectId: string,
      stateId: string,
      reqParams: RequestParams = {},
    ) =>
      this.request<DtoStateLight, ApierrorsDefinedError>({
        path: `/api/auth/workspaces/${workspaceSlug}/projects/${projectId}/states/${stateId}`,
        method: "GET",
        secure: true,
        ...reqParams,
      }),

    /**
     * @description Удаляет статус по его ID, если он не является статусом по умолчанию и не используется задачами
     *
     * @tags Projects
     * @name DeleteState
     * @summary Проекты (статусы): удаление статуса
     * @request DELETE:/api/auth/workspaces/{workspaceSlug}/projects/{projectId}/states/{stateId}
     * @secure
     */
    deleteState: (
      workspaceSlug: string,
      projectId: string,
      stateId: string,
      reqParams: RequestParams = {},
    ) =>
      this.request<void, ApierrorsDefinedError>({
        path: `/api/auth/workspaces/${workspaceSlug}/projects/${projectId}/states/${stateId}`,
        method: "DELETE",
        secure: true,
        ...reqParams,
      }),

    /**
     * @description Обновляет данные существующего статуса по его ID
     *
     * @tags Projects
     * @name UpdateState
     * @summary Проекты (статусы): обновление статуса
     * @request PATCH:/api/auth/workspaces/{workspaceSlug}/projects/{projectId}/states/{stateId}
     * @secure
     */
    updateState: (
      workspaceSlug: string,
      projectId: string,
      stateId: string,
      data: AiplanUpdateStateRequest,
      reqParams: RequestParams = {},
    ) =>
      this.request<DtoStateLight, ApierrorsDefinedError>({
        path: `/api/auth/workspaces/${workspaceSlug}/projects/${projectId}/states/${stateId}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...reqParams,
      }),

    /**
     * @description Возвращает список шаблонов задач с пагинацией.
     *
     * @tags Projects
     * @name GetProjectIssueTemplates
     * @summary Проекты (шаблоны задач): получение списка шаблонов задач
     * @request GET:/api/auth/workspaces/{workspaceSlug}/projects/{projectId}/templates
     * @secure
     */
    getProjectIssueTemplates: (
      workspaceSlug: string,
      projectId: string,
      query?: {
        /**
         * Смещение для пагинации
         * @default -1
         */
        offset?: number;
        /**
         * Количество участников на странице
         * @default 100
         */
        limit?: number;
      },
      reqParams: RequestParams = {},
    ) =>
      this.request<
        DaoPaginationResponse & {
          result?: DtoIssueTemplate[];
        },
        ApierrorsDefinedError
      >({
        path: `/api/auth/workspaces/${workspaceSlug}/projects/${projectId}/templates`,
        method: "GET",
        query: query,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...reqParams,
      }),

    /**
     * @description Создает новый шаблон задач для проекта
     *
     * @tags Projects
     * @name CreateIssueTemplate
     * @summary Проекты (шаблоны задач): создание шаблона
     * @request POST:/api/auth/workspaces/{workspaceSlug}/projects/{projectId}/templates
     * @secure
     */
    createIssueTemplate: (
      workspaceSlug: string,
      projectId: string,
      data: DtoIssueTemplate,
      reqParams: RequestParams = {},
    ) =>
      this.request<void, ApierrorsDefinedError>({
        path: `/api/auth/workspaces/${workspaceSlug}/projects/${projectId}/templates`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...reqParams,
      }),

    /**
     * @description Возвращает данные шаблона задач по его ID
     *
     * @tags Projects
     * @name GetIssueTemplate
     * @summary Проекты (шаблоны задач): получение информации о шаблоне
     * @request GET:/api/auth/workspaces/{workspaceSlug}/projects/{projectId}/templates/{templateId}
     * @secure
     */
    getIssueTemplate: (
      workspaceSlug: string,
      projectId: string,
      templateId: string,
      reqParams: RequestParams = {},
    ) =>
      this.request<DtoIssueTemplate, ApierrorsDefinedError>({
        path: `/api/auth/workspaces/${workspaceSlug}/projects/${projectId}/templates/${templateId}`,
        method: "GET",
        secure: true,
        ...reqParams,
      }),

    /**
     * @description Удаляет шаблон задач для проекта
     *
     * @tags Projects
     * @name DeleteIssueTemplate
     * @summary Проекты (шаблоны задач): удаление шаблона
     * @request DELETE:/api/auth/workspaces/{workspaceSlug}/projects/{projectId}/templates/{templateId}
     * @secure
     */
    deleteIssueTemplate: (
      workspaceSlug: string,
      projectId: string,
      templateId: string,
      reqParams: RequestParams = {},
    ) =>
      this.request<void, ApierrorsDefinedError>({
        path: `/api/auth/workspaces/${workspaceSlug}/projects/${projectId}/templates/${templateId}`,
        method: "DELETE",
        secure: true,
        type: ContentType.Json,
        ...reqParams,
      }),

    /**
     * @description Обновляет шаблон задач для проекта
     *
     * @tags Projects
     * @name UpdateIssueTemplate
     * @summary Проекты (шаблоны задач): обновление шаблона
     * @request PATCH:/api/auth/workspaces/{workspaceSlug}/projects/{projectId}/templates/{templateId}
     * @secure
     */
    updateIssueTemplate: (
      workspaceSlug: string,
      projectId: string,
      templateId: string,
      data: DtoIssueTemplate,
      reqParams: RequestParams = {},
    ) =>
      this.request<void, ApierrorsDefinedError>({
        path: `/api/auth/workspaces/${workspaceSlug}/projects/${projectId}/templates/${templateId}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...reqParams,
      }),

    /**
     * @description Возвращает список избранных проектов текущего пользователя в рабочем пространстве.
     *
     * @tags Projects
     * @name GetFavoriteProjects
     * @summary Проекты: получение списка избранных проектов пользователя
     * @request GET:/api/auth/workspaces/{workspaceSlug}/user-favorite-projects/
     * @secure
     */
    getFavoriteProjects: (
      workspaceSlug: string,
      reqParams: RequestParams = {},
    ) =>
      this.request<DtoProjectFavorites[], ApierrorsDefinedError>({
        path: `/api/auth/workspaces/${workspaceSlug}/user-favorite-projects/`,
        method: "GET",
        secure: true,
        ...reqParams,
      }),

    /**
     * @description Добавляет указанный проект в список избранных проектов текущего пользователя в рабочем пространстве.
     *
     * @tags Projects
     * @name AddProjectToFavorites
     * @summary Проекты: добавление проекта в список избранных проектов пользователя
     * @request POST:/api/auth/workspaces/{workspaceSlug}/user-favorite-projects/
     * @secure
     */
    addProjectToFavorites: (
      workspaceSlug: string,
      project: AiplanAddProjectToFavoritesRequest,
      reqParams: RequestParams = {},
    ) =>
      this.request<void, ApierrorsDefinedError>({
        path: `/api/auth/workspaces/${workspaceSlug}/user-favorite-projects/`,
        method: "POST",
        body: project,
        secure: true,
        type: ContentType.Json,
        ...reqParams,
      }),

    /**
     * @description Удаляет указанный проект из списка избранных проектов текущего пользователя в рабочем пространстве.
     *
     * @tags Projects
     * @name RemoveProjectFromFavorites
     * @summary Проекты: удаление проекта из списка избранных проектов пользователя
     * @request DELETE:/api/auth/workspaces/{workspaceSlug}/user-favorite-projects/{projectId}
     * @secure
     */
    removeProjectFromFavorites: (
      workspaceSlug: string,
      projectId: string,
      reqParams: RequestParams = {},
    ) =>
      this.request<void, ApierrorsDefinedError>({
        path: `/api/auth/workspaces/${workspaceSlug}/user-favorite-projects/${projectId}`,
        method: "DELETE",
        secure: true,
        ...reqParams,
      }),
  };
  forms = {
    /**
     * @description Получает информацию о форме, требующей аутентификации для ответов.
     *
     * @tags Forms
     * @name GetFormAuth
     * @summary формы: получить форму (аутентификация)
     * @request GET:/api/auth/forms/{formSlug}/
     * @secure
     */
    getFormAuth: (formSlug: string, reqParams: RequestParams = {}) =>
      this.request<DtoForm, ApierrorsDefinedError>({
        path: `/api/auth/forms/${formSlug}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...reqParams,
      }),

    /**
     * @description Отправляет ответ на форму, требующую аутентификации.
     *
     * @tags Forms
     * @name CreateAnswerAuth
     * @summary ответы: Отправить ответ (аутентифицированный)
     * @request POST:/api/auth/forms/{formSlug}/answer/
     * @secure
     */
    createAnswerAuth: (
      formSlug: string,
      answer: AiplanReqAnswer[],
      reqParams: RequestParams = {},
    ) =>
      this.request<AiplanRespAnswers, ApierrorsDefinedError>({
        path: `/api/auth/forms/${formSlug}/answer/`,
        method: "POST",
        body: answer,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...reqParams,
      }),

    /**
     * @description Загружает новое вложение в ответ формы
     *
     * @tags Forms
     * @name CreateFormAttachments
     * @summary вложения: загрузка вложения в ответ формы
     * @request POST:/api/auth/forms/{formSlug}/form-attachments/
     * @secure
     */
    createFormAttachments: (
      workspaceSlug: string,
      formSlug: string,
      data: {
        /** Файл для загрузки */
        asset: File;
      },
      reqParams: RequestParams = {},
    ) =>
      this.request<DtoAttachment, ApierrorsDefinedError>({
        path: `/api/auth/forms/${formSlug}/form-attachments/`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.FormData,
        format: "json",
        ...reqParams,
      }),

    /**
     * @description Возвращает список форм для указанного рабочего пространства.
     *
     * @tags Forms
     * @name GetFormList
     * @summary формы: список по пространству
     * @request GET:/api/auth/workspaces/{workspaceSlug}/forms/
     * @secure
     */
    getFormList: (workspaceSlug: string, reqParams: RequestParams = {}) =>
      this.request<DtoFormLight[], ApierrorsDefinedError>({
        path: `/api/auth/workspaces/${workspaceSlug}/forms/`,
        method: "GET",
        secure: true,
        format: "json",
        ...reqParams,
      }),

    /**
     * @description Создает новую форму в рабочем пространстве.
     *
     * @tags Forms
     * @name CreateForm
     * @summary формы: создать форму
     * @request POST:/api/auth/workspaces/{workspaceSlug}/forms/
     * @secure
     */
    createForm: (
      workspaceSlug: string,
      form: AiplanReqForm,
      reqParams: RequestParams = {},
    ) =>
      this.request<DtoForm, ApierrorsDefinedError>({
        path: `/api/auth/workspaces/${workspaceSlug}/forms/`,
        method: "POST",
        body: form,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...reqParams,
      }),

    /**
     * @description Удаляет форму в рабочем пространстве.
     *
     * @tags Forms
     * @name DeleteForm
     * @summary формы: удалить форму
     * @request DELETE:/api/auth/workspaces/{workspaceSlug}/forms/{formSlug}/
     * @secure
     */
    deleteForm: (
      workspaceSlug: string,
      formSlug: string,
      reqParams: RequestParams = {},
    ) =>
      this.request<void, ApierrorsDefinedError>({
        path: `/api/auth/workspaces/${workspaceSlug}/forms/${formSlug}/`,
        method: "DELETE",
        secure: true,
        ...reqParams,
      }),

    /**
     * @description Обновляет данные формы.
     *
     * @tags Forms
     * @name UpdateForm
     * @summary формы: обновить форму
     * @request PATCH:/api/auth/workspaces/{workspaceSlug}/forms/{formSlug}/
     * @secure
     */
    updateForm: (
      workspaceSlug: string,
      formSlug: string,
      form: AiplanReqForm,
      reqParams: RequestParams = {},
    ) =>
      this.request<DtoForm, ApierrorsDefinedError>({
        path: `/api/auth/workspaces/${workspaceSlug}/forms/${formSlug}/`,
        method: "PATCH",
        body: form,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...reqParams,
      }),

    /**
     * @description Возвращает список всех ответов на указанную форму.
     *
     * @tags Forms
     * @name GetAnswers
     * @summary ответы: Получить ответы
     * @request GET:/api/auth/workspaces/{workspaceSlug}/forms/{formSlug}/answers/
     * @secure
     */
    getAnswers: (
      workspaceSlug: string,
      formSlug: string,
      query?: {
        /**
         * Смещение для пагинации
         * @default 0
         */
        offset?: number;
        /**
         * Количество результатов на странице
         * @default 100
         */
        limit?: number;
      },
      reqParams: RequestParams = {},
    ) =>
      this.request<
        (DaoPaginationResponse & {
          result?: DtoFormAnswer[];
        })[],
        ApierrorsDefinedError
      >({
        path: `/api/auth/workspaces/${workspaceSlug}/forms/${formSlug}/answers/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...reqParams,
      }),

    /**
     * @description Возвращает информацию о конкретном ответе по ID.
     *
     * @tags Forms
     * @name GetAnswer
     * @summary ответы: Получить ответ
     * @request GET:/api/auth/workspaces/{workspaceSlug}/forms/{formSlug}/answers/{answerSeq}/
     * @secure
     */
    getAnswer: (
      workspaceSlug: string,
      formSlug: string,
      answerSeq: string,
      reqParams: RequestParams = {},
    ) =>
      this.request<DtoFormAnswer, ApierrorsDefinedError>({
        path: `/api/auth/workspaces/${workspaceSlug}/forms/${formSlug}/answers/${answerSeq}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...reqParams,
      }),

    /**
     * @description Получает информацию о форме, без аутентификации
     *
     * @tags Forms
     * @name GetFormNoAuth
     * @summary формы: получить форму
     * @request GET:/api/forms/{formSlug}/
     */
    getFormNoAuth: (formSlug: string, reqParams: RequestParams = {}) =>
      this.request<DtoForm, ApierrorsDefinedError>({
        path: `/api/forms/${formSlug}/`,
        method: "GET",
        format: "json",
        ...reqParams,
      }),

    /**
     * @description Отправляет ответ на форму.
     *
     * @tags Forms
     * @name CreateAnswerNoAuth
     * @summary ответы: Отправить ответ
     * @request POST:/api/forms/{formSlug}/answer/
     */
    createAnswerNoAuth: (
      formSlug: string,
      answer: AiplanReqAnswer[],
      reqParams: RequestParams = {},
    ) =>
      this.request<AiplanRespAnswers, ApierrorsDefinedError>({
        path: `/api/forms/${formSlug}/answer/`,
        method: "POST",
        body: answer,
        type: ContentType.Json,
        format: "json",
        ...reqParams,
      }),
  };
  docs = {
    /**
     * @description Удаляет указанное вложение, прикрепленное к документу
     *
     * @tags Docs
     * @name DeleteFormAttachment
     * @summary Doc (вложения): удаление вложения из документа
     * @request DELETE:/api/auth/forms/{formSlug}/form-attachments/{attachmentId}
     * @secure
     */
    deleteFormAttachment: (
      workspaceSlug: string,
      formSlug: string,
      attachmentId: string,
      reqParams: RequestParams = {},
    ) =>
      this.request<void, ApierrorsDefinedError>({
        path: `/api/auth/forms/${formSlug}/form-attachments/${attachmentId}`,
        method: "DELETE",
        secure: true,
        type: ContentType.Json,
        ...reqParams,
      }),

    /**
     * @description Возвращает список коневых документов
     *
     * @tags Docs
     * @name GetRootDocList
     * @summary doc: получение всех корневых документов
     * @request GET:/api/auth/workspaces/{workspaceSlug}/doc/
     * @secure
     */
    getRootDocList: (workspaceSlug: string, reqParams: RequestParams = {}) =>
      this.request<DtoDocLight[], ApierrorsDefinedError>({
        path: `/api/auth/workspaces/${workspaceSlug}/doc/`,
        method: "GET",
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...reqParams,
      }),

    /**
     * @description добавление корневого документа
     *
     * @tags Docs
     * @name CreateRootDoc
     * @summary doc: добавление корневого документа
     * @request POST:/api/auth/workspaces/{workspaceSlug}/doc/
     * @secure
     */
    createRootDoc: (
      workspaceSlug: string,
      data: {
        /**
         * документ в формате JSON
         * @example "{"title": "title text", "content": "<p>HTML-контент</p>", "reader_role": 5, "editor_role":10, "seq_id": 0, "draft": false}"
         */
        doc: string;
        /** Вложения для документа */
        files?: File;
      },
      reqParams: RequestParams = {},
    ) =>
      this.request<DtoDoc, ApierrorsDefinedError>({
        path: `/api/auth/workspaces/${workspaceSlug}/doc/`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.FormData,
        format: "json",
        ...reqParams,
      }),

    /**
     * @description получение документа
     *
     * @tags Docs
     * @name GetDoc
     * @summary doc: получение документа
     * @request GET:/api/auth/workspaces/{workspaceSlug}/doc/{docId}/
     * @secure
     */
    getDoc: (
      workspaceSlug: string,
      docId: string,
      reqParams: RequestParams = {},
    ) =>
      this.request<DtoDoc, ApierrorsDefinedError>({
        path: `/api/auth/workspaces/${workspaceSlug}/doc/${docId}/`,
        method: "GET",
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...reqParams,
      }),

    /**
     * @description добавление документа
     *
     * @tags Docs
     * @name CreateDoc
     * @summary doc: добавление документа
     * @request POST:/api/auth/workspaces/{workspaceSlug}/doc/{docId}/
     * @secure
     */
    createDoc: (
      workspaceSlug: string,
      docId: string,
      data: {
        /**
         * документ в формате JSON
         * @example "{"title": "title text", "content": "<p>HTML-контент</p>", "reader_role": 5, "editor_role":10, "seq_id": 0, "draft": false}"
         */
        doc: string;
        /** Вложения для документа */
        files?: File;
      },
      reqParams: RequestParams = {},
    ) =>
      this.request<DtoDoc, ApierrorsDefinedError>({
        path: `/api/auth/workspaces/${workspaceSlug}/doc/${docId}/`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.FormData,
        format: "json",
        ...reqParams,
      }),

    /**
     * @description удаление документа
     *
     * @tags Docs
     * @name DeleteDoc
     * @summary doc: удаление документа
     * @request DELETE:/api/auth/workspaces/{workspaceSlug}/doc/{docId}/
     * @secure
     */
    deleteDoc: (
      workspaceSlug: string,
      docId: string,
      reqParams: RequestParams = {},
    ) =>
      this.request<void, ApierrorsDefinedError>({
        path: `/api/auth/workspaces/${workspaceSlug}/doc/${docId}/`,
        method: "DELETE",
        secure: true,
        type: ContentType.Json,
        ...reqParams,
      }),

    /**
     * @description изменение документа
     *
     * @tags Docs
     * @name UpdateDoc
     * @summary doc: изменение документа
     * @request PATCH:/api/auth/workspaces/{workspaceSlug}/doc/{docId}/
     * @secure
     */
    updateDoc: (
      workspaceSlug: string,
      docId: string,
      data: {
        /**
         * документ в формате JSON
         * @example "{"title": "title text", "content": "<p>HTML-контент</p>", "reader_role": 5, "editor_role":10, "seq_id": 0, "draft": false}"
         */
        doc: string;
        /** Вложения для документа */
        files?: File;
      },
      reqParams: RequestParams = {},
    ) =>
      this.request<DtoDoc, ApierrorsDefinedError>({
        path: `/api/auth/workspaces/${workspaceSlug}/doc/${docId}/`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.FormData,
        format: "json",
        ...reqParams,
      }),

    /**
     * @description Возвращает активность по документу
     *
     * @tags Docs
     * @name GetDocActivityList
     * @summary Doc: получение активности по документу
     * @request GET:/api/auth/workspaces/{workspaceSlug}/doc/{docId}/activities/
     * @secure
     */
    getDocActivityList: (
      workspaceSlug: string,
      docId: string,
      query?: {
        /**
         * Смещение для пагинации
         * @default 0
         */
        offset?: number;
        /**
         * Лимит записей
         * @default 100
         */
        limit?: number;
      },
      reqParams: RequestParams = {},
    ) =>
      this.request<
        DaoPaginationResponse & {
          result?: DtoEntityActivityFull[];
        },
        ApierrorsDefinedError
      >({
        path: `/api/auth/workspaces/${workspaceSlug}/doc/${docId}/activities/`,
        method: "GET",
        query: query,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...reqParams,
      }),

    /**
     * @description Возвращает все дочерние документы
     *
     * @tags Docs
     * @name GetChildDocList
     * @summary doc: получение все дочерние документы
     * @request GET:/api/auth/workspaces/{workspaceSlug}/doc/{docId}/child/
     * @secure
     */
    getChildDocList: (
      workspaceSlug: string,
      docId: string,
      reqParams: RequestParams = {},
    ) =>
      this.request<DtoDocLight[], ApierrorsDefinedError>({
        path: `/api/auth/workspaces/${workspaceSlug}/doc/${docId}/child/`,
        method: "GET",
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...reqParams,
      }),

    /**
     * @description комментарии документа
     *
     * @tags Docs
     * @name GetDocCommentList
     * @summary doc: комментарии документа
     * @request GET:/api/auth/workspaces/{workspaceSlug}/doc/{docId}/comments/
     * @secure
     */
    getDocCommentList: (
      workspaceSlug: string,
      docId: string,
      query?: {
        /**
         * Смещение для пагинации
         * @default 0
         */
        offset?: number;
        /**
         * Лимит записей
         * @default 100
         */
        limit?: number;
      },
      reqParams: RequestParams = {},
    ) =>
      this.request<
        DaoPaginationResponse & {
          result?: DtoDocComment[];
        },
        ApierrorsDefinedError
      >({
        path: `/api/auth/workspaces/${workspaceSlug}/doc/${docId}/comments/`,
        method: "GET",
        query: query,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...reqParams,
      }),

    /**
     * @description создание комментария
     *
     * @tags Docs
     * @name CreateDocComment
     * @summary doc: создание комментария
     * @request POST:/api/auth/workspaces/{workspaceSlug}/doc/{docId}/comments/
     * @secure
     */
    createDocComment: (
      workspaceSlug: string,
      docId: string,
      data: {
        /**
         * комментарий в формате JSON
         * @example "{"comment_html": "<p>HTML-контент</p>", "reply_to_comment_id": null}"
         */
        comment: string;
        /** Вложения для документа */
        files?: File;
      },
      reqParams: RequestParams = {},
    ) =>
      this.request<DtoDocComment, ApierrorsDefinedError>({
        path: `/api/auth/workspaces/${workspaceSlug}/doc/${docId}/comments/`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.FormData,
        format: "json",
        ...reqParams,
      }),

    /**
     * @description Получает данные комментария
     *
     * @tags Docs
     * @name GetDocComment
     * @summary doc: получение комментария
     * @request GET:/api/auth/workspaces/{workspaceSlug}/doc/{docId}/comments/{commentId}/
     * @secure
     */
    getDocComment: (
      workspaceSlug: string,
      docId: string,
      commentId: string,
      reqParams: RequestParams = {},
    ) =>
      this.request<DtoDocComment, ApierrorsDefinedError>({
        path: `/api/auth/workspaces/${workspaceSlug}/doc/${docId}/comments/${commentId}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...reqParams,
      }),

    /**
     * @description удаление комментария
     *
     * @tags Docs
     * @name DeleteDocComment
     * @summary doc: удаление комментария
     * @request DELETE:/api/auth/workspaces/{workspaceSlug}/doc/{docId}/comments/{commentId}/
     * @secure
     */
    deleteDocComment: (
      workspaceSlug: string,
      docId: string,
      commentId: string,
      reqParams: RequestParams = {},
    ) =>
      this.request<void, ApierrorsDefinedError>({
        path: `/api/auth/workspaces/${workspaceSlug}/doc/${docId}/comments/${commentId}/`,
        method: "DELETE",
        secure: true,
        type: ContentType.Json,
        ...reqParams,
      }),

    /**
     * @description обновление комментария
     *
     * @tags Docs
     * @name UpdateDocComment
     * @summary doc: обновление комментария
     * @request PATCH:/api/auth/workspaces/{workspaceSlug}/doc/{docId}/comments/{commentId}/
     * @secure
     */
    updateDocComment: (
      workspaceSlug: string,
      docId: string,
      commentId: string,
      data: {
        /**
         * комментарий в формате JSON
         * @example "{"comment_html": "<p>HTML-контент</p>", "reply_to_comment_id": null}"
         */
        comment: string;
        /** Вложения для документа */
        files?: File;
      },
      reqParams: RequestParams = {},
    ) =>
      this.request<DtoDocComment, ApierrorsDefinedError>({
        path: `/api/auth/workspaces/${workspaceSlug}/doc/${docId}/comments/${commentId}/`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.FormData,
        format: "json",
        ...reqParams,
      }),

    /**
     * @description добавление реакции
     *
     * @tags Docs
     * @name AddDocCommentReaction
     * @summary doc: добавление реакции
     * @request POST:/api/auth/workspaces/{workspaceSlug}/doc/{docId}/comments/{commentId}/reactions/
     * @secure
     */
    addDocCommentReaction: (
      workspaceSlug: string,
      docId: string,
      commentId: string,
      data: AiplanReactionRequest,
      reqParams: RequestParams = {},
    ) =>
      this.request<DtoCommentReaction, ApierrorsDefinedError>({
        path: `/api/auth/workspaces/${workspaceSlug}/doc/${docId}/comments/${commentId}/reactions/`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...reqParams,
      }),

    /**
     * @description удаление реакции
     *
     * @tags Docs
     * @name RemoveDocCommentReaction
     * @summary doc: удаление реакции
     * @request DELETE:/api/auth/workspaces/{workspaceSlug}/doc/{docId}/comments/{commentId}/reactions/{reaction}/
     * @secure
     */
    removeDocCommentReaction: (
      workspaceSlug: string,
      docId: string,
      commentId: string,
      reaction: string,
      reqParams: RequestParams = {},
    ) =>
      this.request<void, ApierrorsDefinedError>({
        path: `/api/auth/workspaces/${workspaceSlug}/doc/${docId}/comments/${commentId}/reactions/${reaction}/`,
        method: "DELETE",
        secure: true,
        type: ContentType.Json,
        ...reqParams,
      }),

    /**
     * @description Возвращает список всех вложений, прикрепленных к документу
     *
     * @tags Docs
     * @name GetDocAttachmentList
     * @summary Doc (вложения): получение вложений документа
     * @request GET:/api/auth/workspaces/{workspaceSlug}/doc/{docId}/doc-attachments/
     * @secure
     */
    getDocAttachmentList: (
      workspaceSlug: string,
      docId: string,
      reqParams: RequestParams = {},
    ) =>
      this.request<DtoAttachment[], ApierrorsDefinedError>({
        path: `/api/auth/workspaces/${workspaceSlug}/doc/${docId}/doc-attachments/`,
        method: "GET",
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...reqParams,
      }),

    /**
     * @description Загружает новое вложение и прикрепляет его к документу
     *
     * @tags Docs
     * @name CreateDocAttachments
     * @summary Doc (вложения): загрузка вложения в документ
     * @request POST:/api/auth/workspaces/{workspaceSlug}/doc/{docId}/doc-attachments/
     * @secure
     */
    createDocAttachments: (
      workspaceSlug: string,
      docId: string,
      data: {
        /** Файл для загрузки */
        asset: File;
      },
      reqParams: RequestParams = {},
    ) =>
      this.request<DtoAttachment, ApierrorsDefinedError>({
        path: `/api/auth/workspaces/${workspaceSlug}/doc/${docId}/doc-attachments/`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.FormData,
        format: "json",
        ...reqParams,
      }),

    /**
     * @description Удаляет указанное вложение, прикрепленное к документу
     *
     * @tags Docs
     * @name DeleteDocAttachment
     * @summary Doc (вложения): удаление вложения из документа
     * @request DELETE:/api/auth/workspaces/{workspaceSlug}/doc/{docId}/doc-attachments/{attachmentId}
     * @secure
     */
    deleteDocAttachment: (
      workspaceSlug: string,
      docId: string,
      attachmentId: string,
      reqParams: RequestParams = {},
    ) =>
      this.request<void, ApierrorsDefinedError>({
        path: `/api/auth/workspaces/${workspaceSlug}/doc/${docId}/doc-attachments/${attachmentId}`,
        method: "DELETE",
        secure: true,
        type: ContentType.Json,
        ...reqParams,
      }),

    /**
     * @description Возвращает истории изменений  по документу
     *
     * @tags Docs
     * @name GetDocHistoryList
     * @summary Doc: получение истории изменений по документу
     * @request GET:/api/auth/workspaces/{workspaceSlug}/doc/{docId}/history/
     * @secure
     */
    getDocHistoryList: (
      workspaceSlug: string,
      docId: string,
      query?: {
        /**
         * Смещение для пагинации
         * @default 0
         */
        offset?: number;
        /**
         * Лимит записей
         * @default 100
         */
        limit?: number;
      },
      reqParams: RequestParams = {},
    ) =>
      this.request<
        DaoPaginationResponse & {
          result?: DtoHistoryBodyLight[];
        },
        ApierrorsDefinedError
      >({
        path: `/api/auth/workspaces/${workspaceSlug}/doc/${docId}/history/`,
        method: "GET",
        query: query,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...reqParams,
      }),

    /**
     * @description Возвращает старую версию по документу
     *
     * @tags Docs
     * @name GetDocHistory
     * @summary Doc: получение старой версии по документу
     * @request GET:/api/auth/workspaces/{workspaceSlug}/doc/{docId}/history/{versionId}
     * @secure
     */
    getDocHistory: (
      workspaceSlug: string,
      docId: string,
      versionId: string,
      reqParams: RequestParams = {},
    ) =>
      this.request<DtoHistoryBody, ApierrorsDefinedError>({
        path: `/api/auth/workspaces/${workspaceSlug}/doc/${docId}/history/${versionId}`,
        method: "GET",
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...reqParams,
      }),

    /**
     * @description Откатывает старую версию документа
     *
     * @tags Docs
     * @name UpdateDocFromHistory
     * @summary Doc: Откат старой версии документа
     * @request PATCH:/api/auth/workspaces/{workspaceSlug}/doc/{docId}/history/{versionId}
     * @secure
     */
    updateDocFromHistory: (
      workspaceSlug: string,
      docId: string,
      versionId: string,
      reqParams: RequestParams = {},
    ) =>
      this.request<void, ApierrorsDefinedError>({
        path: `/api/auth/workspaces/${workspaceSlug}/doc/${docId}/history/${versionId}`,
        method: "PATCH",
        secure: true,
        type: ContentType.Json,
        ...reqParams,
      }),

    /**
     * @description перенос документа
     *
     * @tags Docs
     * @name MoveDoc
     * @summary doc: перенос документа
     * @request POST:/api/auth/workspaces/{workspaceSlug}/doc/{docId}/move/
     * @secure
     */
    moveDoc: (
      workspaceSlug: string,
      docId: string,
      reqParams: RequestParams = {},
    ) =>
      this.request<void, ApierrorsDefinedError>({
        path: `/api/auth/workspaces/${workspaceSlug}/doc/${docId}/move/`,
        method: "POST",
        secure: true,
        type: ContentType.Json,
        ...reqParams,
      }),

    /**
     * @description Возвращает список избранных документов текущего пользователя в рабочем пространстве.
     *
     * @tags Docs
     * @name GetFavoriteDocList
     * @summary Doc (Favorites): получение списка избранных документов
     * @request GET:/api/auth/workspaces/{workspaceSlug}/user-favorite-docs/
     * @secure
     */
    getFavoriteDocList: (
      workspaceSlug: string,
      reqParams: RequestParams = {},
    ) =>
      this.request<DtoDocFavorites[], ApierrorsDefinedError>({
        path: `/api/auth/workspaces/${workspaceSlug}/user-favorite-docs/`,
        method: "GET",
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...reqParams,
      }),

    /**
     * @description Добавляет указанный документ в список избранных текущего пользователя в рабочем пространстве.
     *
     * @tags Docs
     * @name AddDocToFavorites
     * @summary Doc (Favorites): добавление документа в избранное
     * @request POST:/api/auth/workspaces/{workspaceSlug}/user-favorite-docs/
     * @secure
     */
    addDocToFavorites: (
      workspaceSlug: string,
      project: AiplanAddDocToFavoritesRequest,
      reqParams: RequestParams = {},
    ) =>
      this.request<DtoDocFavorites, ApierrorsDefinedError>({
        path: `/api/auth/workspaces/${workspaceSlug}/user-favorite-docs/`,
        method: "POST",
        body: project,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...reqParams,
      }),

    /**
     * @description Удаляет указанный документ из списка избранных текущего пользователя в рабочем пространстве.
     *
     * @tags Docs
     * @name RemoveDocFromFavorites
     * @summary Doc (Favorites): удаление документа из избранных
     * @request DELETE:/api/auth/workspaces/{workspaceSlug}/user-favorite-docs/{docId}
     * @secure
     */
    removeDocFromFavorites: (
      workspaceSlug: string,
      docId: string,
      reqParams: RequestParams = {},
    ) =>
      this.request<void, ApierrorsDefinedError>({
        path: `/api/auth/workspaces/${workspaceSlug}/user-favorite-docs/${docId}`,
        method: "DELETE",
        secure: true,
        type: ContentType.Json,
        ...reqParams,
      }),
  };
  integrations = {
    /**
     * @description Отменяет запущенный импорт
     *
     * @tags Integrations
     * @name CancelJiraImport
     * @summary Интеграции (Jira): отмена запущенного импорта
     * @request POST:/api/auth/import/jira/cancel/{importId}
     * @secure
     */
    cancelJiraImport: (importId: string, reqParams: RequestParams = {}) =>
      this.request<void, ApierrorsDefinedError>({
        path: `/api/auth/import/jira/cancel/${importId}`,
        method: "POST",
        secure: true,
        type: ContentType.Json,
        ...reqParams,
      }),

    /**
     * @description Возвращает информацию о Jira на основе предоставленных учетных данных и URL
     *
     * @tags Integrations
     * @name GetJiraInfo
     * @summary Интеграции (Jira): получение информации о Jira
     * @request POST:/api/auth/import/jira/info
     * @secure
     */
    getJiraInfo: (data: AiplanJiraInfoRequest, reqParams: RequestParams = {}) =>
      this.request<EntityJiraInfo, ApierrorsDefinedError>({
        path: `/api/auth/import/jira/info`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...reqParams,
      }),

    /**
     * @description Запускает процесс импорта проекта из Jira в указанное рабочее пространство
     *
     * @tags Integrations
     * @name StartJiraImport
     * @summary Интеграции (Jira): начало импорта проекта из Jira
     * @request POST:/api/auth/import/jira/start/{projectKey}
     * @secure
     */
    startJiraImport: (
      projectKey: string,
      data: AiplanJiraInfoRequest,
      reqParams: RequestParams = {},
    ) =>
      this.request<Record<string, string>, ApierrorsDefinedError>({
        path: `/api/auth/import/jira/start/${projectKey}`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...reqParams,
      }),

    /**
     * @description Возвращает список всех импортов, инициированных текущим пользователем
     *
     * @tags Integrations
     * @name GetMyImportList
     * @summary Интеграции (Jira): получение моих импортов
     * @request GET:/api/auth/import/jira/status
     * @secure
     */
    getMyImportList: (reqParams: RequestParams = {}) =>
      this.request<Record<string, any>, ApierrorsDefinedError>({
        path: `/api/auth/import/jira/status`,
        method: "GET",
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...reqParams,
      }),

    /**
     * @description Возвращает статус конкретного импорта по его ID
     *
     * @tags Integrations
     * @name GetJiraImportStatus
     * @summary Интеграции (Jira): получение статуса импорта из Jira
     * @request GET:/api/auth/import/jira/status/{importId}
     * @secure
     */
    getJiraImportStatus: (importId: string, reqParams: RequestParams = {}) =>
      this.request<IssuesImportImportStatus, ApierrorsDefinedError>({
        path: `/api/auth/import/jira/status/${importId}`,
        method: "GET",
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...reqParams,
      }),

    /**
     * @description Возвращает ссылку для подключения к Telegram боту уведомлений, если он доступен
     *
     * @tags Integrations
     * @name GetTgBotLink
     * @summary Интеграции: получение ссылки на Telegram бота
     * @request GET:/api/auth/notification-bot-link/
     */
    getTgBotLink: (reqParams: RequestParams = {}) =>
      this.request<Record<string, boolean>, ApierrorsDefinedError>({
        path: `/api/auth/notification-bot-link/`,
        method: "GET",
        format: "json",
        ...reqParams,
      }),

    /**
     * @description Перенаправляет пользователя на файл, хранящийся в MinIO, по имени файла или ID
     *
     * @tags Integrations
     * @name RedirectToMinioFile
     * @summary Интеграции: перенаправление на файл в MinIO
     * @request GET:/api/file/{fileName}
     * @secure
     */
    redirectToMinioFile: (fileName: string, reqParams: RequestParams = {}) =>
      this.request<any, void | ApierrorsDefinedError>({
        path: `/api/file/${fileName}`,
        method: "GET",
        secure: true,
        ...reqParams,
      }),
  };
  issues = {
    /**
     * @description Выполняет поиск задач с использованием фильтров и сортировки
     *
     * @tags Issues
     * @name GetIssueList
     * @summary Задачи: поиск задач
     * @request POST:/api/auth/issues/search
     * @secure
     */
    getIssueList: (
      filters: TypesIssuesListFilters,
      query?: {
        /**
         * Включать подзадачи
         * @default true
         */
        show_sub_issues?: boolean;
        /**
         * Поле для сортировки
         * @default ""sequence_id""
         */
        order_by?: string;
        /**
         * Поле для группировки результатов
         * @default """"
         */
        group_by?: string;
        /**
         * Смещение для пагинации
         * @default -1
         */
        offset?: number;
        /**
         * Лимит записей
         * @default 100
         */
        limit?: number;
        /**
         * Сортировка по убыванию
         * @default true
         */
        desc?: boolean;
        /**
         * Вернуть только количество
         * @default false
         */
        only_count?: boolean;
        /**
         * Вернуть только активные задачи
         * @default false
         */
        only_active?: boolean;
      },
      reqParams: RequestParams = {},
    ) =>
      this.request<DtoIssueSearchResult, ApierrorsDefinedError>({
        path: `/api/auth/issues/search`,
        method: "POST",
        query: query,
        body: filters,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...reqParams,
      }),

    /**
     * @description Мигрирует задачу из одного проекта в другой с опциональной поддержкой связанных задач и удаления исходной задачи
     *
     * @tags Issues
     * @name MigrateIssues
     * @summary Задачи (миграции): миграция задачи рабочего пространства
     * @request POST:/api/auth/workspaces/{workspaceSlug}/issues/migrate
     * @secure
     */
    migrateIssues: (
      workspaceSlug: string,
      query: {
        /** ID целевого проекта */
        target_project: string;
        /** ID исходной задачи */
        src_issue: string;
        /**
         * Мигрировать связанные задачи
         * @default false
         */
        linked_issues?: boolean;
        /**
         * Удалить исходную задачу после миграции
         * @default false
         */
        delete_src?: boolean;
        /**
         * Создать не достающие label, state
         * @default false
         */
        create_entities?: boolean;
      },
      reqParams: RequestParams = {},
    ) =>
      this.request<
        AiplanNewIssueID,
        Record<string, any> | ApierrorsDefinedError
      >({
        path: `/api/auth/workspaces/${workspaceSlug}/issues/migrate`,
        method: "POST",
        query: query,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...reqParams,
      }),

    /**
     * @description Мигрирует все задачи с определенной меткой из одного проекта в другой с опциональной поддержкой связанных задач и удаления исходных задач
     *
     * @tags Issues
     * @name MigrateIssuesByLabel
     * @summary Задачи (миграции): миграция задач по метке рабочего пространства
     * @request POST:/api/auth/workspaces/{workspaceSlug}/issues/migrate/byLabel
     * @secure
     */
    migrateIssuesByLabel: (
      workspaceSlug: string,
      query: {
        /** ID целевого проекта */
        target_project: string;
        /** ID исходной метки */
        src_label: string;
        /**
         * Мигрировать связанные задачи
         * @default false
         */
        linked_issues?: boolean;
        /**
         * Удалить исходные задачи после миграции
         * @default false
         */
        delete_src?: boolean;
        /**
         * Создать не достающие label, state
         * @default false
         */
        create_entities?: boolean;
      },
      reqParams: RequestParams = {},
    ) =>
      this.request<void, Record<string, any> | ApierrorsDefinedError>({
        path: `/api/auth/workspaces/${workspaceSlug}/issues/migrate/byLabel`,
        method: "POST",
        query: query,
        secure: true,
        type: ContentType.Json,
        ...reqParams,
      }),

    /**
     * @description Удаляет несколько задач в проекте по их ID
     *
     * @tags Issues
     * @name DeleteIssuesBulk
     * @summary Задачи: массовое удаление задач
     * @request DELETE:/api/auth/workspaces/{workspaceSlug}/projects/{projectId}/bulk-delete-issues
     * @secure
     */
    deleteIssuesBulk: (
      workspaceSlug: string,
      projectId: string,
      issuesIds: string[],
      reqParams: RequestParams = {},
    ) =>
      this.request<Record<string, string>, ApierrorsDefinedError>({
        path: `/api/auth/workspaces/${workspaceSlug}/projects/${projectId}/bulk-delete-issues`,
        method: "DELETE",
        body: issuesIds,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...reqParams,
      }),

    /**
     * @description Создает новую задачу в проекте с указанными параметрами и настройками
     *
     * @tags Issues
     * @name CreateIssue
     * @summary Задачи: создание новой задачи
     * @request POST:/api/auth/workspaces/{workspaceSlug}/projects/{projectId}/issues/
     * @secure
     */
    createIssue: (
      workspaceSlug: string,
      projectId: string,
      issue: AiplanIssueCreateRequest,
      reqParams: RequestParams = {},
    ) =>
      this.request<AiplanNewIssueID, ApierrorsDefinedError>({
        path: `/api/auth/workspaces/${workspaceSlug}/projects/${projectId}/issues/`,
        method: "POST",
        body: issue,
        secure: true,
        type: ContentType.FormData,
        format: "json",
        ...reqParams,
      }),

    /**
     * @description Возвращает информацию о задаче в проекте по её идентификатору или номеру последовательности
     *
     * @tags Issues
     * @name GetIssue
     * @summary Задачи: получение задачи
     * @request GET:/api/auth/workspaces/{workspaceSlug}/projects/{projectId}/issues/{issueIdOrSeq}
     * @secure
     */
    getIssue: (
      workspaceSlug: string,
      projectId: string,
      issueIdOrSeq: string,
      reqParams: RequestParams = {},
    ) =>
      this.request<DtoIssue, ApierrorsDefinedError>({
        path: `/api/auth/workspaces/${workspaceSlug}/projects/${projectId}/issues/${issueIdOrSeq}`,
        method: "GET",
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...reqParams,
      }),

    /**
     * @description Удаляет задачу из проекта. Только автор задачи или администратор могут выполнить удаление.
     *
     * @tags Issues
     * @name DeleteIssue
     * @summary Задачи: удаление задачи
     * @request DELETE:/api/auth/workspaces/{workspaceSlug}/projects/{projectId}/issues/{issueIdOrSeq}
     * @secure
     */
    deleteIssue: (
      workspaceSlug: string,
      projectId: string,
      issueIdOrSeq: string,
      reqParams: RequestParams = {},
    ) =>
      this.request<void, ApierrorsDefinedError>({
        path: `/api/auth/workspaces/${workspaceSlug}/projects/${projectId}/issues/${issueIdOrSeq}`,
        method: "DELETE",
        secure: true,
        type: ContentType.Json,
        ...reqParams,
      }),

    /**
     * @description Обновляет указанные поля задачи, такие как состояние, исполнители, наблюдатели, метки и вложения.
     *
     * @tags Issues
     * @name UpdateIssue
     * @summary Задачи: частичное обновление задачи
     * @request PATCH:/api/auth/workspaces/{workspaceSlug}/projects/{projectId}/issues/{issueIdOrSeq}
     * @secure
     */
    updateIssue: (
      workspaceSlug: string,
      projectId: string,
      issueIdOrSeq: string,
      data: {
        /** задача в формате JSON */
        issue: string;
        /** Файлы для добавления в задачу */
        files?: File;
      },
      reqParams: RequestParams = {},
    ) =>
      this.request<DtoIssue, ApierrorsDefinedError>({
        path: `/api/auth/workspaces/${workspaceSlug}/projects/${projectId}/issues/${issueIdOrSeq}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.FormData,
        format: "json",
        ...reqParams,
      }),

    /**
     * @description Возвращает активность по задаче без учета комментариев, с возможностью фильтрации по полю
     *
     * @tags Issues
     * @name GetIssueActivityList
     * @summary Задачи: получение активности по задаче
     * @request GET:/api/auth/workspaces/{workspaceSlug}/projects/{projectId}/issues/{issueIdOrSeq}/activities
     * @secure
     */
    getIssueActivityList: (
      workspaceSlug: string,
      projectId: string,
      issueIdOrSeq: string,
      query?: {
        /**
         * Смещение для пагинации
         * @default 0
         */
        offset?: number;
        /**
         * Лимит записей
         * @default 100
         */
        limit?: number;
        /** Поле активности для фильтрации (например: state) */
        field?: string;
      },
      reqParams: RequestParams = {},
    ) =>
      this.request<
        DaoPaginationResponse & {
          result?: DtoEntityActivityFull[];
        },
        ApierrorsDefinedError
      >({
        path: `/api/auth/workspaces/${workspaceSlug}/projects/${projectId}/issues/${issueIdOrSeq}/activities`,
        method: "GET",
        query: query,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...reqParams,
      }),

    /**
     * @description Поиск задач, которые могут быть добавлены в качестве блокирующих для текущей задачи
     *
     * @tags Issues
     * @name GetAvailableBlockersIssueList
     * @summary Задачи: поиск доступных блокирующих задач
     * @request GET:/api/auth/workspaces/{workspaceSlug}/projects/{projectId}/issues/{issueIdOrSeq}/blockers-issues/available
     * @secure
     */
    getAvailableBlockersIssueList: (
      workspaceSlug: string,
      projectId: string,
      issueIdOrSeq: string,
      query?: {
        /** Смещение для пагинации */
        offset?: number;
        /** Лимит записей */
        limit?: number;
        /** Поле для сортировки */
        order_by?: string;
        /** Сортировка по убыванию */
        desc?: boolean;
        /** Поисковый запрос */
        search_query?: string;
      },
      reqParams: RequestParams = {},
    ) =>
      this.request<
        DaoPaginationResponse & {
          result?: DtoIssue[];
        },
        ApierrorsDefinedError
      >({
        path: `/api/auth/workspaces/${workspaceSlug}/projects/${projectId}/issues/${issueIdOrSeq}/blockers-issues/available`,
        method: "GET",
        query: query,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...reqParams,
      }),

    /**
     * @description Поиск задач, которые могут быть добавлены в качестве блокируемых текущей задачей
     *
     * @tags Issues
     * @name GetAvailableBlocksIssueList
     * @summary Задачи: поиск доступных блокируемых задач
     * @request GET:/api/auth/workspaces/{workspaceSlug}/projects/{projectId}/issues/{issueIdOrSeq}/blocks-issues/available
     * @secure
     */
    getAvailableBlocksIssueList: (
      workspaceSlug: string,
      projectId: string,
      issueIdOrSeq: string,
      query?: {
        /** Смещение для пагинации */
        offset?: number;
        /** Лимит записей */
        limit?: number;
        /** Поле для сортировки */
        order_by?: string;
        /** Сортировка по убыванию */
        desc?: boolean;
        /** Поисковый запрос */
        search_query?: string;
      },
      reqParams: RequestParams = {},
    ) =>
      this.request<
        DaoPaginationResponse & {
          result?: DtoIssue[];
        },
        ApierrorsDefinedError
      >({
        path: `/api/auth/workspaces/${workspaceSlug}/projects/${projectId}/issues/${issueIdOrSeq}/blocks-issues/available`,
        method: "GET",
        query: query,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...reqParams,
      }),

    /**
     * @description Возвращает список комментариев к задаче с возможностью пагинации
     *
     * @tags Issues
     * @name GetIssueCommentList
     * @summary Задачи (комментарии): получение списка комментариев к задаче
     * @request GET:/api/auth/workspaces/{workspaceSlug}/projects/{projectId}/issues/{issueIdOrSeq}/comments
     * @secure
     */
    getIssueCommentList: (
      workspaceSlug: string,
      projectId: string,
      issueIdOrSeq: string,
      query?: {
        /**
         * Смещение для пагинации
         * @default 0
         */
        offset?: number;
        /**
         * Лимит записей
         * @default 100
         */
        limit?: number;
      },
      reqParams: RequestParams = {},
    ) =>
      this.request<
        DaoPaginationResponse & {
          result?: DtoIssueComment[];
        },
        ApierrorsDefinedError
      >({
        path: `/api/auth/workspaces/${workspaceSlug}/projects/${projectId}/issues/${issueIdOrSeq}/comments`,
        method: "GET",
        query: query,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...reqParams,
      }),

    /**
     * @description Добавляет новый комментарий к задаче с возможностью добавления вложений
     *
     * @tags Issues
     * @name CreateIssueComment
     * @summary Задачи (комментарии): добавление комментария к задаче
     * @request POST:/api/auth/workspaces/{workspaceSlug}/projects/{projectId}/issues/{issueIdOrSeq}/comments
     * @secure
     */
    createIssueComment: (
      workspaceSlug: string,
      projectId: string,
      issueIdOrSeq: string,
      data: {
        /** Текст комментария в формате JSON */
        comment: string;
        /** Вложения для комментария */
        files?: File;
      },
      reqParams: RequestParams = {},
    ) =>
      this.request<DtoIssueComment, ApierrorsDefinedError>({
        path: `/api/auth/workspaces/${workspaceSlug}/projects/${projectId}/issues/${issueIdOrSeq}/comments`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.FormData,
        format: "json",
        ...reqParams,
      }),

    /**
     * @description Получает данные комментария к задаче
     *
     * @tags Issues
     * @name GetIssueComment
     * @summary Задачи (комментарии): получение комментария к задаче
     * @request GET:/api/auth/workspaces/{workspaceSlug}/projects/{projectId}/issues/{issueIdOrSeq}/comments/{commentId}
     * @secure
     */
    getIssueComment: (
      workspaceSlug: string,
      projectId: string,
      issueIdOrSeq: string,
      commentId: string,
      reqParams: RequestParams = {},
    ) =>
      this.request<DtoIssueComment, ApierrorsDefinedError>({
        path: `/api/auth/workspaces/${workspaceSlug}/projects/${projectId}/issues/${issueIdOrSeq}/comments/${commentId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...reqParams,
      }),

    /**
     * @description Удаляет указанный комментарий из задачи
     *
     * @tags Issues
     * @name DeleteIssueComment
     * @summary Задачи(комментарии): удаление комментария к задаче
     * @request DELETE:/api/auth/workspaces/{workspaceSlug}/projects/{projectId}/issues/{issueIdOrSeq}/comments/{commentId}
     * @secure
     */
    deleteIssueComment: (
      workspaceSlug: string,
      projectId: string,
      issueIdOrSeq: string,
      commentId: string,
      reqParams: RequestParams = {},
    ) =>
      this.request<void, ApierrorsDefinedError>({
        path: `/api/auth/workspaces/${workspaceSlug}/projects/${projectId}/issues/${issueIdOrSeq}/comments/${commentId}`,
        method: "DELETE",
        secure: true,
        type: ContentType.Json,
        ...reqParams,
      }),

    /**
     * @description Изменяет текст и вложения для указанного комментария задачи
     *
     * @tags Issues
     * @name UpdateIssueComment
     * @summary Задачи (комментарии): изменение комментария к задаче
     * @request PATCH:/api/auth/workspaces/{workspaceSlug}/projects/{projectId}/issues/{issueIdOrSeq}/comments/{commentId}
     * @secure
     */
    updateIssueComment: (
      workspaceSlug: string,
      projectId: string,
      issueIdOrSeq: string,
      commentId: string,
      data: {
        /** Обновленный текст комментария в формате JSON */
        comment: string;
        /** Новые вложения для комментария */
        files?: File;
      },
      reqParams: RequestParams = {},
    ) =>
      this.request<DtoIssueComment, ApierrorsDefinedError>({
        path: `/api/auth/workspaces/${workspaceSlug}/projects/${projectId}/issues/${issueIdOrSeq}/comments/${commentId}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.FormData,
        format: "json",
        ...reqParams,
      }),

    /**
     * @description Добавляет реакцию пользователя к комментарию задачи
     *
     * @tags Issues
     * @name AddCommentReaction
     * @summary Задачи (комментарии): добавление реакции к комментарию
     * @request POST:/api/auth/workspaces/{workspaceSlug}/projects/{projectId}/issues/{issueIdOrSeq}/comments/{commentId}/reactions
     * @secure
     */
    addCommentReaction: (
      workspaceSlug: string,
      projectId: string,
      issueIdOrSeq: string,
      commentId: string,
      data: Record<string, string>,
      reqParams: RequestParams = {},
    ) =>
      this.request<DtoCommentReaction, ApierrorsDefinedError>({
        path: `/api/auth/workspaces/${workspaceSlug}/projects/${projectId}/issues/${issueIdOrSeq}/comments/${commentId}/reactions`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...reqParams,
      }),

    /**
     * @description Удаляет указанную реакцию пользователя с комментария задачи
     *
     * @tags Issues
     * @name RemoveCommentReaction
     * @summary Задачи (комментарии): удаление реакции с комментария
     * @request DELETE:/api/auth/workspaces/{workspaceSlug}/projects/{projectId}/issues/{issueIdOrSeq}/comments/{commentId}/reactions/{reaction}
     * @secure
     */
    removeCommentReaction: (
      workspaceSlug: string,
      projectId: string,
      issueIdOrSeq: string,
      commentId: string,
      reaction: string,
      reqParams: RequestParams = {},
    ) =>
      this.request<void, ApierrorsDefinedError>({
        path: `/api/auth/workspaces/${workspaceSlug}/projects/${projectId}/issues/${issueIdOrSeq}/comments/${commentId}/reactions/${reaction}`,
        method: "DELETE",
        secure: true,
        type: ContentType.Json,
        ...reqParams,
      }),

    /**
     * @description Блокирует описание задачи за вызвавшим пользователем, так что только он сможет сохранять описание
     *
     * @tags Issues
     * @name IssueDescriptionLock
     * @summary Задачи: Блокировка описания задачи за пользователем
     * @request POST:/api/auth/workspaces/{workspaceSlug}/projects/{projectId}/issues/{issueIdOrSeq}/description-lock
     * @secure
     */
    issueDescriptionLock: (
      workspaceSlug: string,
      projectId: string,
      issueIdOrSeq: string,
      reqParams: RequestParams = {},
    ) =>
      this.request<
        AiplanIssueLockResponse,
        ApierrorsDefinedError | AiplanIssueLockResponse
      >({
        path: `/api/auth/workspaces/${workspaceSlug}/projects/${projectId}/issues/${issueIdOrSeq}/description-lock`,
        method: "POST",
        secure: true,
        format: "json",
        ...reqParams,
      }),

    /**
     * @description Разблокирует описание задачи
     *
     * @tags Issues
     * @name IssueDescriptionUnlock
     * @summary Задачи: Разблокировка описания задачи
     * @request POST:/api/auth/workspaces/{workspaceSlug}/projects/{projectId}/issues/{issueIdOrSeq}/description-unlock
     * @secure
     */
    issueDescriptionUnlock: (
      workspaceSlug: string,
      projectId: string,
      issueIdOrSeq: string,
      reqParams: RequestParams = {},
    ) =>
      this.request<void, ApierrorsDefinedError>({
        path: `/api/auth/workspaces/${workspaceSlug}/projects/${projectId}/issues/${issueIdOrSeq}/description-unlock`,
        method: "POST",
        secure: true,
        ...reqParams,
      }),

    /**
     * @description Возвращает историю изменений и комментариев для задачи, отсортированных по времени создания
     *
     * @tags Issues
     * @name GetIssueHistoryList
     * @summary Задачи: получение истории задачи
     * @request GET:/api/auth/workspaces/{workspaceSlug}/projects/{projectId}/issues/{issueIdOrSeq}/history
     * @secure
     */
    getIssueHistoryList: (
      workspaceSlug: string,
      projectId: string,
      issueIdOrSeq: string,
      reqParams: RequestParams = {},
    ) =>
      this.request<any[], ApierrorsDefinedError>({
        path: `/api/auth/workspaces/${workspaceSlug}/projects/${projectId}/issues/${issueIdOrSeq}/history`,
        method: "GET",
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...reqParams,
      }),

    /**
     * @description Возвращает список всех вложений, прикрепленных к задаче
     *
     * @tags Issues
     * @name GetIssueAttachmentList
     * @summary Задачи (вложения): получение вложений задачи
     * @request GET:/api/auth/workspaces/{workspaceSlug}/projects/{projectId}/issues/{issueIdOrSeq}/issue-attachments
     * @secure
     */
    getIssueAttachmentList: (
      workspaceSlug: string,
      projectId: string,
      issueIdOrSeq: string,
      reqParams: RequestParams = {},
    ) =>
      this.request<
        (DaoPaginationResponse & {
          result?: DtoAttachment[];
        })[],
        ApierrorsDefinedError
      >({
        path: `/api/auth/workspaces/${workspaceSlug}/projects/${projectId}/issues/${issueIdOrSeq}/issue-attachments`,
        method: "GET",
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...reqParams,
      }),

    /**
     * @description Загружает новое вложение и прикрепляет его к задаче
     *
     * @tags Issues
     * @name CreateIssueAttachments
     * @summary Задачи (вложения): загрузка вложения в задачу
     * @request POST:/api/auth/workspaces/{workspaceSlug}/projects/{projectId}/issues/{issueIdOrSeq}/issue-attachments
     * @secure
     */
    createIssueAttachments: (
      workspaceSlug: string,
      projectId: string,
      issueIdOrSeq: string,
      data: {
        /** Файл для загрузки */
        asset: File;
      },
      reqParams: RequestParams = {},
    ) =>
      this.request<DtoAttachment, ApierrorsDefinedError>({
        path: `/api/auth/workspaces/${workspaceSlug}/projects/${projectId}/issues/${issueIdOrSeq}/issue-attachments`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.FormData,
        format: "json",
        ...reqParams,
      }),

    /**
     * @description Скачивает все вложения задачи в виде ZIP-архива
     *
     * @tags Issues
     * @name DownloadIssueAttachments
     * @summary Задачи (вложения): скачать все вложения в ZIP
     * @request GET:/api/auth/workspaces/{workspaceSlug}/projects/{projectId}/issues/{issueIdOrSeq}/issue-attachments/all/
     * @secure
     */
    downloadIssueAttachments: (
      workspaceSlug: string,
      projectId: string,
      issueIdOrSeq: string,
      data: {
        /** Файл для загрузки */
        asset: File;
      },
      reqParams: RequestParams = {},
    ) =>
      this.request<File, ApierrorsDefinedError>({
        path: `/api/auth/workspaces/${workspaceSlug}/projects/${projectId}/issues/${issueIdOrSeq}/issue-attachments/all/`,
        method: "GET",
        body: data,
        secure: true,
        type: ContentType.FormData,
        ...reqParams,
      }),

    /**
     * @description Удаляет указанное вложение, прикрепленное к задаче
     *
     * @tags Issues
     * @name DeleteIssueAttachment
     * @summary Задачи (вложения): удаление вложения из задачи
     * @request DELETE:/api/auth/workspaces/{workspaceSlug}/projects/{projectId}/issues/{issueIdOrSeq}/issue-attachments/{attachmentId}
     * @secure
     */
    deleteIssueAttachment: (
      workspaceSlug: string,
      projectId: string,
      issueIdOrSeq: string,
      attachmentId: string,
      reqParams: RequestParams = {},
    ) =>
      this.request<void, ApierrorsDefinedError>({
        path: `/api/auth/workspaces/${workspaceSlug}/projects/${projectId}/issues/${issueIdOrSeq}/issue-attachments/${attachmentId}`,
        method: "DELETE",
        secure: true,
        type: ContentType.Json,
        ...reqParams,
      }),

    /**
     * @description Возвращает список всех ссылок, прикрепленных к задаче
     *
     * @tags Issues
     * @name GetIssueLinkList
     * @summary Задачи (ссылки): получение списка ссылок в задаче
     * @request GET:/api/auth/workspaces/{workspaceSlug}/projects/{projectId}/issues/{issueIdOrSeq}/issue-links
     * @secure
     */
    getIssueLinkList: (
      workspaceSlug: string,
      projectId: string,
      issueIdOrSeq: string,
      reqParams: RequestParams = {},
    ) =>
      this.request<DtoIssueLinkLight[], ApierrorsDefinedError>({
        path: `/api/auth/workspaces/${workspaceSlug}/projects/${projectId}/issues/${issueIdOrSeq}/issue-links`,
        method: "GET",
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...reqParams,
      }),

    /**
     * @description Создает новую ссылку, прикрепленную к задаче
     *
     * @tags Issues
     * @name CreateIssueLink
     * @summary Задачи (ссылки): создание ссылки в задаче
     * @request POST:/api/auth/workspaces/{workspaceSlug}/projects/{projectId}/issues/{issueIdOrSeq}/issue-links
     * @secure
     */
    createIssueLink: (
      workspaceSlug: string,
      projectId: string,
      issueIdOrSeq: string,
      data: AiplanIssueLinkRequest,
      reqParams: RequestParams = {},
    ) =>
      this.request<DtoIssueLinkLight, ApierrorsDefinedError>({
        path: `/api/auth/workspaces/${workspaceSlug}/projects/${projectId}/issues/${issueIdOrSeq}/issue-links`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...reqParams,
      }),

    /**
     * @description Удаляет указанную ссылку, прикрепленную к задаче
     *
     * @tags Issues
     * @name DeleteIssueLink
     * @summary Задачи (ссылки): удаление ссылки в задаче
     * @request DELETE:/api/auth/workspaces/{workspaceSlug}/projects/{projectId}/issues/{issueIdOrSeq}/issue-links/{linkId}
     * @secure
     */
    deleteIssueLink: (
      workspaceSlug: string,
      projectId: string,
      issueIdOrSeq: string,
      linkId: string,
      reqParams: RequestParams = {},
    ) =>
      this.request<void, ApierrorsDefinedError>({
        path: `/api/auth/workspaces/${workspaceSlug}/projects/${projectId}/issues/${issueIdOrSeq}/issue-links/${linkId}`,
        method: "DELETE",
        secure: true,
        type: ContentType.Json,
        ...reqParams,
      }),

    /**
     * @description Обновляет существующую ссылку в задаче
     *
     * @tags Issues
     * @name UpdateIssueLink
     * @summary Задачи (ссылки): обновление ссылки в задаче
     * @request PATCH:/api/auth/workspaces/{workspaceSlug}/projects/{projectId}/issues/{issueIdOrSeq}/issue-links/{linkId}
     * @secure
     */
    updateIssueLink: (
      workspaceSlug: string,
      projectId: string,
      issueIdOrSeq: string,
      linkId: string,
      data: AiplanIssueLinkRequest,
      reqParams: RequestParams = {},
    ) =>
      this.request<DtoIssueLinkLight, ApierrorsDefinedError>({
        path: `/api/auth/workspaces/${workspaceSlug}/projects/${projectId}/issues/${issueIdOrSeq}/issue-links/${linkId}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...reqParams,
      }),

    /**
     * @description Возвращает список задач, связанных с указанной задачей
     *
     * @tags Issues
     * @name GetIssueLinkedIssueList
     * @summary Задачи: получение связанных задач
     * @request GET:/api/auth/workspaces/{workspaceSlug}/projects/{projectId}/issues/{issueIdOrSeq}/linked-issues
     * @secure
     */
    getIssueLinkedIssueList: (
      workspaceSlug: string,
      projectId: string,
      issueIdOrSeq: string,
      reqParams: RequestParams = {},
    ) =>
      this.request<DtoIssue[], ApierrorsDefinedError>({
        path: `/api/auth/workspaces/${workspaceSlug}/projects/${projectId}/issues/${issueIdOrSeq}/linked-issues`,
        method: "GET",
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...reqParams,
      }),

    /**
     * @description Устанавливает список связанных задач для указанной задачи
     *
     * @tags Issues
     * @name AddIssueLinkedIssueList
     * @summary Задачи: установка связанных задач
     * @request POST:/api/auth/workspaces/{workspaceSlug}/projects/{projectId}/issues/{issueIdOrSeq}/linked-issues
     * @secure
     */
    addIssueLinkedIssueList: (
      workspaceSlug: string,
      projectId: string,
      issueIdOrSeq: string,
      data: AiplanLinkedIssuesIds,
      reqParams: RequestParams = {},
    ) =>
      this.request<DtoIssueLight[], ApierrorsDefinedError>({
        path: `/api/auth/workspaces/${workspaceSlug}/projects/${projectId}/issues/${issueIdOrSeq}/linked-issues`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...reqParams,
      }),

    /**
     * @description Поиск задач, которые могут быть связаны с текущей задачи
     *
     * @tags Issues
     * @name GetAvailableLinkedIssueList
     * @summary Задачи: поиск доступных для связывания задач
     * @request GET:/api/auth/workspaces/{workspaceSlug}/projects/{projectId}/issues/{issueIdOrSeq}/linked-issues/available/
     * @secure
     */
    getAvailableLinkedIssueList: (
      workspaceSlug: string,
      projectId: string,
      issueIdOrSeq: string,
      query?: {
        /** Смещение для пагинации */
        offset?: number;
        /** Лимит записей */
        limit?: number;
        /** Поле для сортировки */
        order_by?: string;
        /** Сортировка по убыванию */
        desc?: boolean;
        /** Поисковый запрос */
        search_query?: string;
      },
      reqParams: RequestParams = {},
    ) =>
      this.request<
        DaoPaginationResponse & {
          result?: DtoIssue[];
        },
        ApierrorsDefinedError
      >({
        path: `/api/auth/workspaces/${workspaceSlug}/projects/${projectId}/issues/${issueIdOrSeq}/linked-issues/available/`,
        method: "GET",
        query: query,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...reqParams,
      }),

    /**
     * @description Поиск задач, доступных для назначения в качестве родительских для текущей задачи
     *
     * @tags Issues
     * @name GetAvailableParentIssueList
     * @summary Задачи: поиск доступных родительских задач
     * @request GET:/api/auth/workspaces/{workspaceSlug}/projects/{projectId}/issues/{issueIdOrSeq}/parent-issues/available
     * @secure
     */
    getAvailableParentIssueList: (
      workspaceSlug: string,
      projectId: string,
      issueIdOrSeq: string,
      query?: {
        /** Смещение для пагинации */
        offset?: number;
        /** Лимит записей */
        limit?: number;
        /** Поле для сортировки */
        order_by?: string;
        /** Сортировка по убыванию */
        desc?: boolean;
        /** Поисковый запрос */
        search_query?: string;
      },
      reqParams: RequestParams = {},
    ) =>
      this.request<
        DaoPaginationResponse & {
          result?: DtoIssue[];
        },
        ApierrorsDefinedError
      >({
        path: `/api/auth/workspaces/${workspaceSlug}/projects/${projectId}/issues/${issueIdOrSeq}/parent-issues/available`,
        method: "GET",
        query: query,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...reqParams,
      }),

    /**
     * @description Возвращает PDF-файл в соответствии с заданными параметрами
     *
     * @tags Issues
     * @name GetIssuePdf
     * @summary Задачи: Получение PDF-файла задачи
     * @request GET:/api/auth/workspaces/{workspaceSlug}/projects/{projectId}/issues/{issueIdOrSeq}/pdf
     * @secure
     */
    getIssuePdf: (
      workspaceSlug: string,
      projectId: string,
      issueIdOrSeq: string,
      reqParams: RequestParams = {},
    ) =>
      this.request<File, ApierrorsDefinedError>({
        path: `/api/auth/workspaces/${workspaceSlug}/projects/${projectId}/issues/${issueIdOrSeq}/pdf`,
        method: "GET",
        secure: true,
        type: ContentType.Json,
        ...reqParams,
      }),

    /**
     * @description Возвращает список подзадач для указанной задачи с распределением по состояниям
     *
     * @tags Issues
     * @name GetSubIssueList
     * @summary Задачи: получение списка подзадач
     * @request GET:/api/auth/workspaces/{workspaceSlug}/projects/{projectId}/issues/{issueIdOrSeq}/sub-issues
     * @secure
     */
    getSubIssueList: (
      workspaceSlug: string,
      projectId: string,
      issueIdOrSeq: string,
      reqParams: RequestParams = {},
    ) =>
      this.request<AiplanResponseSubIssueList, ApierrorsDefinedError>({
        path: `/api/auth/workspaces/${workspaceSlug}/projects/${projectId}/issues/${issueIdOrSeq}/sub-issues`,
        method: "GET",
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...reqParams,
      }),

    /**
     * @description Добавляет указанные задачи как подзадачи для текущей задачи
     *
     * @tags Issues
     * @name AddSubIssueList
     * @summary Задачи: добавление подзадач
     * @request POST:/api/auth/workspaces/{workspaceSlug}/projects/{projectId}/issues/{issueIdOrSeq}/sub-issues
     * @secure
     */
    addSubIssueList: (
      workspaceSlug: string,
      projectId: string,
      issueIdOrSeq: string,
      data: AiplanSubIssuesIds,
      reqParams: RequestParams = {},
    ) =>
      this.request<DtoIssueLight[], ApierrorsDefinedError>({
        path: `/api/auth/workspaces/${workspaceSlug}/projects/${projectId}/issues/${issueIdOrSeq}/sub-issues`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...reqParams,
      }),

    /**
     * @description Поиск задач, доступных для добавления в качестве подзадач
     *
     * @tags Issues
     * @name GetAvailableSubIssueList
     * @summary Задачи: поиск доступных подзадач
     * @request GET:/api/auth/workspaces/{workspaceSlug}/projects/{projectId}/issues/{issueIdOrSeq}/sub-issues/available
     * @secure
     */
    getAvailableSubIssueList: (
      workspaceSlug: string,
      projectId: string,
      issueIdOrSeq: string,
      query?: {
        /** Смещение для пагинации */
        offset?: number;
        /** Лимит записей */
        limit?: number;
        /** Поле для сортировки */
        order_by?: string;
        /** Сортировка по убыванию */
        desc?: boolean;
        /** Поисковый запрос */
        search_query?: string;
      },
      reqParams: RequestParams = {},
    ) =>
      this.request<
        DaoPaginationResponse & {
          result?: DtoIssue[];
        },
        ApierrorsDefinedError
      >({
        path: `/api/auth/workspaces/${workspaceSlug}/projects/${projectId}/issues/${issueIdOrSeq}/sub-issues/available`,
        method: "GET",
        query: query,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...reqParams,
      }),

    /**
     * @description Перемещает подзадачу выше по списку при ручной сортировке детей
     *
     * @tags Issues
     * @name MoveSubIssueDown
     * @summary Задачи: перемещение подзадачи вверх в списке
     * @request POST:/api/auth/workspaces/{workspaceSlug}/projects/{projectId}/issues/{issueIdOrSeq}/sub-issues/{subIssueId}/down
     * @secure
     */
    moveSubIssueDown: (
      workspaceSlug: string,
      projectId: number,
      issueIdOrSeq: string,
      subIssueId: string,
      reqParams: RequestParams = {},
    ) =>
      this.request<void, ApierrorsDefinedError>({
        path: `/api/auth/workspaces/${workspaceSlug}/projects/${projectId}/issues/${issueIdOrSeq}/sub-issues/${subIssueId}/down`,
        method: "POST",
        secure: true,
        type: ContentType.Json,
        ...reqParams,
      }),

    /**
     * @description Перемещает подзадачу выше по списку при ручной сортировке детей
     *
     * @tags Issues
     * @name MoveSubIssueUp
     * @summary Задачи: перемещение подзадачи вверх в списке
     * @request POST:/api/auth/workspaces/{workspaceSlug}/projects/{projectId}/issues/{issueIdOrSeq}/sub-issues/{subIssueId}/up
     * @secure
     */
    moveSubIssueUp: (
      workspaceSlug: string,
      projectId: number,
      issueIdOrSeq: string,
      subIssueId: string,
      reqParams: RequestParams = {},
    ) =>
      this.request<void, ApierrorsDefinedError>({
        path: `/api/auth/workspaces/${workspaceSlug}/projects/${projectId}/issues/${issueIdOrSeq}/sub-issues/${subIssueId}/up`,
        method: "POST",
        secure: true,
        type: ContentType.Json,
        ...reqParams,
      }),
  };
  notifications = {
    /**
     * @description Позволяет пользователю получить список своих уведомлений с поддержкой пагинации.
     *
     * @tags Notifications
     * @name GetMyNotificationList
     * @summary Пользователи: Получение уведомлений
     * @request GET:/api/auth/users/me/notifications
     * @secure
     */
    getMyNotificationList: (
      query?: {
        /**
         * Смещение для пагинации
         * @default 0
         */
        offset?: number;
        /**
         * Количество записей на странице
         * @default 100
         */
        limit?: number;
      },
      reqParams: RequestParams = {},
    ) =>
      this.request<
        DaoPaginationResponse & {
          result?: NotificationsNotificationResponse[];
        },
        ApierrorsDefinedError
      >({
        path: `/api/auth/users/me/notifications`,
        method: "GET",
        query: query,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...reqParams,
      }),

    /**
     * @description Позволяет пользователю пометить определенные уведомления как прочитанные и возвращает количество непрочитанных уведомлений.
     *
     * @tags Notifications
     * @name UpdateToReadMyNotifications
     * @summary Пользователи: Пометить уведомления как прочитанные
     * @request POST:/api/auth/users/me/notifications
     * @secure
     */
    updateToReadMyNotifications: (
      data: AiplanNotificationViewRequest,
      reqParams: RequestParams = {},
    ) =>
      this.request<AiplanNotificationIdResponse, ApierrorsDefinedError>({
        path: `/api/auth/users/me/notifications`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...reqParams,
      }),

    /**
     * @description Позволяет пользователю удалить все свои уведомления из базы данных.
     *
     * @tags Notifications
     * @name DeleteMyNotifications
     * @summary Пользователи: Удаление всех уведомлений
     * @request DELETE:/api/auth/users/me/notifications
     * @secure
     */
    deleteMyNotifications: (reqParams: RequestParams = {}) =>
      this.request<void, ApierrorsDefinedError>({
        path: `/api/auth/users/me/notifications`,
        method: "DELETE",
        secure: true,
        type: ContentType.Json,
        ...reqParams,
      }),
  };
  sprint = {
    /**
     * @description Возвращает список всех спринтов в рабочем пространстве.
     *
     * @tags Sprint
     * @name GetSprintList
     * @summary Спринты: получения списка спринтов
     * @request GET:/api/auth/workspaces/{workspaceSlug}/sprints/
     * @secure
     */
    getSprintList: (workspaceSlug: string, reqParams: RequestParams = {}) =>
      this.request<DtoSprintLight[], ApierrorsDefinedError>({
        path: `/api/auth/workspaces/${workspaceSlug}/sprints/`,
        method: "GET",
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...reqParams,
      }),

    /**
     * @description Создает новый спринт в рабочем пространстве.
     *
     * @tags Sprint
     * @name CreateSprint
     * @summary Спринты: создание спринта
     * @request POST:/api/auth/workspaces/{workspaceSlug}/sprints/
     * @secure
     */
    createSprint: (
      workspaceSlug: string,
      request: AiplanRequestSprint,
      reqParams: RequestParams = {},
    ) =>
      this.request<DtoSprint, ApierrorsDefinedError>({
        path: `/api/auth/workspaces/${workspaceSlug}/sprints/`,
        method: "POST",
        body: request,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...reqParams,
      }),

    /**
     * @description Получение информации о спринте.
     *
     * @tags Sprint
     * @name GetSprint
     * @summary Спринты: получение информации о спринте
     * @request GET:/api/auth/workspaces/{workspaceSlug}/sprints/{sprintId}/
     * @secure
     */
    getSprint: (
      workspaceSlug: string,
      sprintId: string,
      reqParams: RequestParams = {},
    ) =>
      this.request<DtoSprint, ApierrorsDefinedError>({
        path: `/api/auth/workspaces/${workspaceSlug}/sprints/${sprintId}/`,
        method: "GET",
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...reqParams,
      }),

    /**
     * @description Удаляет спринт.
     *
     * @tags Sprint
     * @name DeleteSprint
     * @summary Спринты: Удалить спринт
     * @request DELETE:/api/auth/workspaces/{workspaceSlug}/sprints/{sprintId}/
     * @secure
     */
    deleteSprint: (
      workspaceSlug: string,
      sprintId: string,
      reqParams: RequestParams = {},
    ) =>
      this.request<void, ApierrorsDefinedError>({
        path: `/api/auth/workspaces/${workspaceSlug}/sprints/${sprintId}/`,
        method: "DELETE",
        secure: true,
        type: ContentType.Json,
        ...reqParams,
      }),

    /**
     * @description Обновление информации о спринте.
     *
     * @tags Sprint
     * @name UpdateSprint
     * @summary Спринты: обновление информации о спринте
     * @request PATCH:/api/auth/workspaces/{workspaceSlug}/sprints/{sprintId}/
     * @secure
     */
    updateSprint: (
      workspaceSlug: string,
      sprintId: string,
      request: AiplanRequestSprint,
      reqParams: RequestParams = {},
    ) =>
      this.request<DtoSprint, ApierrorsDefinedError>({
        path: `/api/auth/workspaces/${workspaceSlug}/sprints/${sprintId}/`,
        method: "PATCH",
        body: request,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...reqParams,
      }),

    /**
     * @description Возвращает список активностей для указанного спринта с возможностью пагинации.
     *
     * @tags Sprint
     * @name GetSpringActivityList
     * @summary Спринты: получение активностей спринта
     * @request GET:/api/auth/workspaces/{workspaceSlug}/sprints/{sprintId}/activities/
     * @secure
     */
    getSpringActivityList: (
      workspaceSlug: string,
      sprintId: string,
      query?: {
        /**
         * Смещение для пагинации
         * @default 0
         */
        offset?: number;
        /**
         * Количество записей на странице
         * @default 100
         */
        limit?: number;
      },
      reqParams: RequestParams = {},
    ) =>
      this.request<
        DaoPaginationResponse & {
          result?: DtoEntityActivityFull[];
        },
        ApierrorsDefinedError
      >({
        path: `/api/auth/workspaces/${workspaceSlug}/sprints/${sprintId}/activities/`,
        method: "GET",
        query: query,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...reqParams,
      }),

    /**
     * @description Добавляет задачи к спринту.
     *
     * @tags Sprint
     * @name SprintIssuesUpdate
     * @summary Спринты: Добавить задачи к спринту
     * @request POST:/api/auth/workspaces/{workspaceSlug}/sprints/{sprintId}/issues/add/
     * @secure
     */
    sprintIssuesUpdate: (
      workspaceSlug: string,
      sprintId: string,
      request: AiplanRequestIssueIdList,
      reqParams: RequestParams = {},
    ) =>
      this.request<void, ApierrorsDefinedError>({
        path: `/api/auth/workspaces/${workspaceSlug}/sprints/${sprintId}/issues/add/`,
        method: "POST",
        body: request,
        secure: true,
        type: ContentType.Json,
        ...reqParams,
      }),

    /**
     * @description Изменение наблюдателей в спринте.
     *
     * @tags Sprint
     * @name SprintWatchersUpdate
     * @summary Спринты: Изменение наблюдателей в спринте
     * @request POST:/api/auth/workspaces/{workspaceSlug}/sprints/{sprintId}/watchers/
     * @secure
     */
    sprintWatchersUpdate: (
      workspaceSlug: string,
      sprintId: string,
      request: AiplanRequestUserIdList,
      reqParams: RequestParams = {},
    ) =>
      this.request<void, ApierrorsDefinedError>({
        path: `/api/auth/workspaces/${workspaceSlug}/sprints/${sprintId}/watchers/`,
        method: "POST",
        body: request,
        secure: true,
        type: ContentType.Json,
        ...reqParams,
      }),
  };
}
