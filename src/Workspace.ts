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


 import type { AxiosRequestConfig, AxiosResponse } from "axios"; 
import { HttpClient, RequestParams, ContentType, HttpResponse } from "./http-client";
import { TypesWeekdayShort, AiplanAddDocToFavoritesRequest, AiplanAddProjectToFavoritesRequest, AiplanCheckProjectIdentifierAvailabilityResponse, AiplanCreateProjectRequest, AiplanCreateWorkspaceRequest, AiplanEmailCaptchaRequest, AiplanFilterParams, AiplanGetRulesLogfilterRequest, AiplanIssueCreateRequest, AiplanIssueLinkRequest, AiplanIssueLockResponse, AiplanJiraInfoRequest, AiplanJoinProjectsRequest, AiplanJoinProjectsSuccessResponse, AiplanLinkedIssuesIds, AiplanLoginRequest, AiplanNewIssueID, AiplanNotificationIdResponse, AiplanNotificationViewRequest, AiplanPasswordRequest, AiplanPasswordResponse, AiplanPostFeedbackRequest, AiplanReactionRequest, AiplanResponseSubIssueList, AiplanSubIssuesIds, AiplanUpdateStateRequest, AiplanUserCreateRequest, AiplanUserUpdateRequest, AiplanProjectNotificationRequest, AiplanReqAnswer, AiplanReqForm, AiplanRequestAddFavorite, AiplanRequestEmailMember, AiplanRequestMembersInvite, AiplanRequestMessage, AiplanRequestRoleMember, AiplanRespAnswers, AiplanResponseLastWorkspace, AiplanRoleUpdRequest, AltchaChallenge, ApierrorsDefinedError, DaoPaginationResponse, DtoAttachment, DtoCommentReaction, DtoDoc, DtoDocComment, DtoDocFavorites, DtoDocLight, DtoEntityActivityFull, DtoFileAsset, DtoForm, DtoFormAnswer, DtoFormLight, DtoHistoryBody, DtoHistoryBodyLight, DtoIssue, DtoIssueBlockerLight, DtoIssueComment, DtoIssueCommentLight, DtoIssueLight, DtoIssueLinkLight, DtoIssueSearchResult, DtoIssueTemplate, DtoIssueWithCount, DtoLabelLight, DtoProject, DtoProjectFavorites, DtoProjectLight, DtoProjectMember, DtoProjectMemberLight, DtoReleaseNoteLight, DtoRulesLog, DtoSearchFilterFull, DtoSearchFilterLight, DtoStateLight, DtoTariffication, DtoUser, DtoUserFeedback, DtoUserLight, DtoWorkspace, DtoWorkspaceFavorites, DtoWorkspaceLight, DtoWorkspaceMember, DtoWorkspaceWithCount, EntityJiraInfo, EntityPrioritiesMapping, IntegrationsIntegration, IssuesImportFailedAttachment, IssuesImportImportStatus, JiraAvatarUrls, JiraIssueLinkType, JiraIssueType, JiraPriority, JiraProjectCategory, NotificationsNotificationDetailResponse, NotificationsNotificationResponse, TypesActivityTable, TypesActivityTableDay, TypesFormFields, TypesIssuesListFilters, TypesProjectMemberNS, TypesTheme, TypesUserSettings, TypesValidationRule, TypesViewFilters, TypesViewProps } from "./data-contracts"

export class Workspace<SecurityDataType = unknown> extends HttpClient<SecurityDataType>  {

            /**
 * @description Возвращает список активностей верхнего уровня с поддержкой пагинации
 *
 * @tags Workspace
 * @name GeRootActivityList
 * @summary Активности: получение активностей верхнего уровня
 * @request GET:/api/auth/admin/activities/
 * @secure
 */
geRootActivityList: (query?: {
  /**
   * День выборки активностей
   * @default """"
   */
    day?: string,
  /**
   * Смещение для пагинации
   * @default -1
   */
    offset?: number,
  /**
   * Количество результатов на странице
   * @default 100
   */
    limit?: number,

}, params: RequestParams = {}) =>
    this.request<(DaoPaginationResponse & {
    result?: (DtoEntityActivityFull)[],

}), ApierrorsDefinedError>({
        path: `/api/auth/admin/activities/`,
        method: 'GET',
        query: query,                secure: true,        type: ContentType.Json,        format: "json",        ...params,
    }),            /**
 * @description Возвращает информацию о последнем посещенном рабочем пространстве пользователя. Если ID последнего рабочего пространства отсутствует, возвращает пустые данные.
 *
 * @tags Workspace
 * @name GetLastVisitedWorkspace
 * @summary Пространство: получение последнего посещенного рабочего пространства
 * @request GET:/api/auth/users/last-visited-workspace
 * @secure
 */
getLastVisitedWorkspace: (params: RequestParams = {}) =>
    this.request<AiplanResponseLastWorkspace, ApierrorsDefinedError>({
        path: `/api/auth/users/last-visited-workspace`,
        method: 'GET',
                        secure: true,                format: "json",        ...params,
    }),            /**
 * @description Возвращает список рабочих пространств, в которых состоит текущий пользователь, с возможностью поиска по имени.
 *
 * @tags Workspace
 * @name GetUserWorkspaceList
 * @summary Пространство: получение рабочих пространств пользователя
 * @request GET:/api/auth/users/me/workspaces/
 * @secure
 */
getUserWorkspaceList: (query?: {
  /** Поисковый запрос для фильтрации рабочих пространств по имени */
    search_query?: string,

}, params: RequestParams = {}) =>
    this.request<(DtoWorkspaceWithCount)[], ApierrorsDefinedError>({
        path: `/api/auth/users/me/workspaces/`,
        method: 'GET',
        query: query,                secure: true,        type: ContentType.Json,        format: "json",        ...params,
    }),            /**
 * @description Возвращает список избранных рабочих пространств с информацией о владельце.
 *
 * @tags Workspace
 * @name GetFavoriteWorkspaceList
 * @summary Пространство (избранное): получение избранных пространств
 * @request GET:/api/auth/users/user-favorite-workspaces/
 * @secure
 */
getFavoriteWorkspaceList: (params: RequestParams = {}) =>
    this.request<(DtoWorkspaceFavorites)[], ApierrorsDefinedError>({
        path: `/api/auth/users/user-favorite-workspaces/`,
        method: 'GET',
                        secure: true,                format: "json",        ...params,
    }),            /**
 * @description Добавляет рабочее пространство в избранное для текущего пользователя.
 *
 * @tags Workspace
 * @name AddWorkspaceToFavorites
 * @summary Пространство (избранное): добавление пространства в избранное
 * @request POST:/api/auth/users/user-favorite-workspaces/
 * @secure
 */
addWorkspaceToFavorites: (workspace: AiplanRequestAddFavorite, params: RequestParams = {}) =>
    this.request<string, ApierrorsDefinedError>({
        path: `/api/auth/users/user-favorite-workspaces/`,
        method: 'POST',
                body: workspace,        secure: true,        type: ContentType.Json,        format: "json",        ...params,
    }),            /**
 * @description Удаляет рабочее пространство из избранного для текущего пользователя по его ID.
 *
 * @tags Workspace
 * @name RemoveWorkspaceFromFavorites
 * @summary Пространство (избранное): удаление пространства из избранного
 * @request DELETE:/api/auth/users/user-favorite-workspaces/{workspaceID}
 * @secure
 */
removeWorkspaceFromFavorites: (workspaceId: string, params: RequestParams = {}) =>
    this.request<string, ApierrorsDefinedError>({
        path: `/api/auth/users/user-favorite-workspaces/${workspaceId}`,
        method: 'DELETE',
                        secure: true,        type: ContentType.Json,        format: "json",        ...params,
    }),            /**
 * @description Создает новое рабочее пространство с заданными параметрами.
 *
 * @tags Workspace
 * @name CreateWorkspace
 * @summary Пространство: создание нового пространства
 * @request POST:/api/auth/workspaces/
 * @secure
 */
createWorkspace: (request: AiplanCreateWorkspaceRequest, params: RequestParams = {}) =>
    this.request<DtoWorkspace, ApierrorsDefinedError>({
        path: `/api/auth/workspaces/`,
        method: 'POST',
                body: request,        secure: true,        type: ContentType.Json,        format: "json",        ...params,
    }),            /**
 * @description Возвращает информацию о рабочем пространстве по его ID
 *
 * @tags Workspace
 * @name GetWorkspace
 * @summary Пространство: получение информации о рабочем пространстве
 * @request GET:/api/auth/workspaces/{workspaceSlug}
 * @secure
 */
getWorkspace: (workspaceSlug: string, params: RequestParams = {}) =>
    this.request<DtoWorkspace, ApierrorsDefinedError>({
        path: `/api/auth/workspaces/${workspaceSlug}`,
        method: 'GET',
                        secure: true,                format: "json",        ...params,
    }),            /**
 * @description Удаляет указанное рабочее пространство. Доступно только для суперпользователей и владельца рабочего пространства.
 *
 * @tags Workspace
 * @name DeleteWorkspace
 * @summary Пространство: удаление пространства
 * @request DELETE:/api/auth/workspaces/{workspaceSlug}
 * @secure
 */
deleteWorkspace: (workspaceSlug: string, params: RequestParams = {}) =>
    this.request<void, ApierrorsDefinedError>({
        path: `/api/auth/workspaces/${workspaceSlug}`,
        method: 'DELETE',
                        secure: true,        type: ContentType.Json,                ...params,
    }),            /**
 * @description Обновляет информацию о рабочем пространстве
 *
 * @tags Workspace
 * @name UpdateWorkspace
 * @summary Пространство: обновление данных рабочего пространства
 * @request PATCH:/api/auth/workspaces/{workspaceSlug}
 * @secure
 */
updateWorkspace: (workspaceSlug: string, workspace: DtoWorkspace, params: RequestParams = {}) =>
    this.request<DtoWorkspace, ApierrorsDefinedError>({
        path: `/api/auth/workspaces/${workspaceSlug}`,
        method: 'PATCH',
                body: workspace,        secure: true,        type: ContentType.Json,        format: "json",        ...params,
    }),            /**
 * @description Возвращает список активностей рабочего пространства с поддержкой пагинации
 *
 * @tags Workspace
 * @name GetWorkspaceActivityList
 * @summary Пространство: получение активностей рабочего пространства
 * @request GET:/api/auth/workspaces/{workspaceSlug}/activities
 * @secure
 */
getWorkspaceActivityList: (workspaceSlug: string, query?: {
  /**
   * День выборки активностей
   * @default """"
   */
    day?: string,
  /**
   * Смещение для пагинации
   * @default -1
   */
    offset?: number,
  /**
   * Количество результатов на странице
   * @default 100
   */
    limit?: number,

}, params: RequestParams = {}) =>
    this.request<(DaoPaginationResponse & {
    result?: (DtoEntityActivityFull)[],

}), ApierrorsDefinedError>({
        path: `/api/auth/workspaces/${workspaceSlug}/activities`,
        method: 'GET',
        query: query,                secure: true,        type: ContentType.Json,        format: "json",        ...params,
    }),            /**
 * @description получение интеграций
 *
 * @tags Workspace
 * @name GetIntegrationList
 * @summary Пространство (интеграции): получение интеграций
 * @request GET:/api/auth/workspaces/{workspaceSlug}/integrations/
 * @secure
 */
getIntegrationList: (workspaceSlug: string, params: RequestParams = {}) =>
    this.request<(IntegrationsIntegration)[], ApierrorsDefinedError>({
        path: `/api/auth/workspaces/${workspaceSlug}/integrations/`,
        method: 'GET',
                        secure: true,        type: ContentType.Json,        format: "json",        ...params,
    }),            /**
 * @description добавление интеграции в пространство
 *
 * @tags Workspace
 * @name AddIntegrationToWorkspace
 * @summary Пространство (интеграции): добавление интеграции
 * @request POST:/api/auth/workspaces/{workspaceSlug}/integrations/add/{name}/
 * @secure
 */
addIntegrationToWorkspace: (workspaceSlug: string, name: string, params: RequestParams = {}) =>
    this.request<void, ApierrorsDefinedError>({
        path: `/api/auth/workspaces/${workspaceSlug}/integrations/add/${name}/`,
        method: 'POST',
                        secure: true,        type: ContentType.Json,                ...params,
    }),            /**
 * @description удаление интеграции из пространства
 *
 * @tags Workspace
 * @name DeleteIntegrationFromWorkspace
 * @summary Пространство (интеграции): удаление интеграции
 * @request POST:/api/auth/workspaces/{workspaceSlug}/integrations/{name}/
 * @secure
 */
deleteIntegrationFromWorkspace: (workspaceSlug: string, name: string, params: RequestParams = {}) =>
    this.request<void, ApierrorsDefinedError>({
        path: `/api/auth/workspaces/${workspaceSlug}/integrations/${name}/`,
        method: 'POST',
                        secure: true,        type: ContentType.Json,                ...params,
    }),            /**
 * @description Приглашает новых пользователей или существующих в системе в указанное рабочее пространство, Приглашённые получают роль, определённую отправителем.
 *
 * @tags Workspace
 * @name AddToWorkspace
 * @summary Пространство: приглашение новых участников пространства
 * @request POST:/api/auth/workspaces/{workspaceSlug}/invite
 * @secure
 */
addToWorkspace: (workspaceSlug: string, invite: AiplanRequestMembersInvite, params: RequestParams = {}) =>
    this.request<Record<string,any>, ApierrorsDefinedError>({
        path: `/api/auth/workspaces/${workspaceSlug}/invite`,
        method: 'POST',
                body: invite,        secure: true,        type: ContentType.Json,        format: "json",        ...params,
    }),            /**
 * @description Генерирует и возвращает JWT-токен для доступа пользователя в комнату Jitsi, соответствующую рабочему пространству.
 *
 * @tags Workspace
 * @name GetWorkspaceJitsiToken
 * @summary Пространство: получение токена для Jitsi-комнаты рабочего пространства
 * @request GET:/api/auth/workspaces/{workspaceSlug}/jitsi-token
 * @secure
 */
getWorkspaceJitsiToken: (workspaceSlug: string, params: RequestParams = {}) =>
    this.request<Record<string,string>, ApierrorsDefinedError>({
        path: `/api/auth/workspaces/${workspaceSlug}/jitsi-token`,
        method: 'GET',
                        secure: true,                format: "json",        ...params,
    }),            /**
 * @description Загружает новый логотип для указанного рабочего пространства и обновляет запись в базе данных.
 *
 * @tags Workspace
 * @name UpdateWorkspaceLogo
 * @summary Пространство (логотип): обновление пространства
 * @request POST:/api/auth/workspaces/{workspaceSlug}/logo
 * @secure
 */
updateWorkspaceLogo: (workspaceSlug: string, data: {
  /** Файл логотипа */
    file: File,

}, params: RequestParams = {}) =>
    this.request<DtoWorkspace, ApierrorsDefinedError>({
        path: `/api/auth/workspaces/${workspaceSlug}/logo`,
        method: 'POST',
                body: data,        secure: true,        type: ContentType.FormData,        format: "json",        ...params,
    }),            /**
 * @description Удаляет логотип указанного рабочего пространства и обновляет запись в базе данных.
 *
 * @tags Workspace
 * @name DeleteWorkspaceLogo
 * @summary Пространство (логотип): удаление логотипа пространства
 * @request DELETE:/api/auth/workspaces/{workspaceSlug}/logo
 * @secure
 */
deleteWorkspaceLogo: (workspaceSlug: string, params: RequestParams = {}) =>
    this.request<DtoWorkspace, ApierrorsDefinedError>({
        path: `/api/auth/workspaces/${workspaceSlug}/logo`,
        method: 'DELETE',
                        secure: true,        type: ContentType.Json,        format: "json",        ...params,
    }),            /**
 * @description Возвращает список участников указанного рабочего пространства. Включает поиск по email или имени.
 *
 * @tags Workspace
 * @name GetWorkspaceMemberList
 * @summary Пространство (участники): получение списка участников пространства
 * @request GET:/api/auth/workspaces/{workspaceSlug}/members
 * @secure
 */
getWorkspaceMemberList: (workspaceSlug: string, query?: {
  /**
   * Смещение для пагинации
   * @default -1
   */
    offset?: number,
  /**
   * Ограничение количества записей на странице
   * @default 100
   */
    limit?: number,
  /**
   * Поисковый запрос для фильтрации участников по email или имени
   * @default """"
   */
    search_query?: string,
  /**
   * Поле для сортировки: 'last_name' (по умолчанию), 'email', 'role'
   * @default ""last_name""
   */
    order_by?: string,
  /**
   * Направление сортировки: true - по убыванию, false - по возрастанию
   * @default true
   */
    desc?: boolean,

}, params: RequestParams = {}) =>
    this.request<(DaoPaginationResponse & {
    result?: (DtoWorkspaceMember)[],

}), ApierrorsDefinedError>({
        path: `/api/auth/workspaces/${workspaceSlug}/members`,
        method: 'GET',
        query: query,                secure: true,        type: ContentType.Json,        format: "json",        ...params,
    }),            /**
 * @description активность участников пространства
 *
 * @tags Workspace
 * @name GetWorkspaceMembersActivityList
 * @summary Пространство: активность участников
 * @request GET:/api/auth/workspaces/{workspaceSlug}/members/activities/
 * @secure
 */
getWorkspaceMembersActivityList: (workspaceSlug: string, query: {
  /** Начальная дата периода в формате YYYY-MM-DD */
    from: string,
  /** Конечная дата периода в формате YYYY-MM-DD */
    to: string,

}, params: RequestParams = {}) =>
    this.request<Record<string,TypesActivityTable>, ApierrorsDefinedError>({
        path: `/api/auth/workspaces/${workspaceSlug}/members/activities/`,
        method: 'GET',
        query: query,                secure: true,        type: ContentType.Json,        format: "json",        ...params,
    }),            /**
 * @description Позволяет отправить сообщение всем участникам рабочего пространства или выбранным участникам. Поддерживается отправка отложенных сообщений.
 *
 * @tags Workspace
 * @name CreateMessageForWorkspaceMember
 * @summary Пространство: Отправка сообщений участникам
 * @request POST:/api/auth/workspaces/{workspaceSlug}/members/message/
 * @secure
 */
createMessageForWorkspaceMember: (workspaceSlug: string, data: AiplanRequestMessage, params: RequestParams = {}) =>
    this.request<void, ApierrorsDefinedError>({
        path: `/api/auth/workspaces/${workspaceSlug}/members/message/`,
        method: 'POST',
                body: data,        secure: true,        type: ContentType.Json,                ...params,
    }),            /**
 * @description Удаляет указанного участника из рабочего пространства
 *
 * @tags Workspace
 * @name DeleteWorkspaceMember
 * @summary Пространство (участники): удаление участника пространства
 * @request DELETE:/api/auth/workspaces/{workspaceSlug}/members/{memberId}
 * @secure
 */
deleteWorkspaceMember: (workspaceSlug: string, memberId: string, params: RequestParams = {}) =>
    this.request<void, ApierrorsDefinedError>({
        path: `/api/auth/workspaces/${workspaceSlug}/members/${memberId}`,
        method: 'DELETE',
                        secure: true,        type: ContentType.Json,                ...params,
    }),            /**
 * @description Изменяет роль участника в рабочем пространстве. Администраторы могут назначать и изменять роли участников.
 *
 * @tags Workspace
 * @name UpdateWorkspaceMember
 * @summary Пространство (участники): обновление роли участника пространства
 * @request PATCH:/api/auth/workspaces/{workspaceSlug}/members/{memberId}
 * @secure
 */
updateWorkspaceMember: (workspaceSlug: string, memberId: string, role: AiplanRequestRoleMember, params: RequestParams = {}) =>
    this.request<DtoWorkspaceMember, ApierrorsDefinedError>({
        path: `/api/auth/workspaces/${workspaceSlug}/members/${memberId}`,
        method: 'PATCH',
                body: role,        secure: true,        type: ContentType.Json,        format: "json",        ...params,
    }),            /**
 * @description Устанавливает email для участника рабочего пространства. Операция доступна только администраторам рабочего пространства.
 *
 * @tags Workspace
 * @name UpdateUserEmail
 * @summary Пространство (участники): назначение email для участника пространства
 * @request PATCH:/api/auth/workspaces/{workspaceSlug}/members/{memberId}/set-email/
 * @secure
 */
updateUserEmail: (workspaceSlug: string, memberId: string, email: AiplanRequestEmailMember, params: RequestParams = {}) =>
    this.request<void, ApierrorsDefinedError>({
        path: `/api/auth/workspaces/${workspaceSlug}/members/${memberId}/set-email/`,
        method: 'PATCH',
                body: email,        secure: true,        type: ContentType.Json,                ...params,
    }),            /**
 * @description Возвращает список состояний, сгруппированных по проектам, для указанного рабочего пространства.
 *
 * @tags Workspace
 * @name GetWorkspaceStateList
 * @summary Пространство: получение состояния рабочего пространства
 * @request GET:/api/auth/workspaces/{workspaceSlug}/states/
 * @secure
 */
getWorkspaceStateList: (workspaceSlug: string, params: RequestParams = {}) =>
    this.request<Record<string,(DtoStateLight)[]>, ApierrorsDefinedError>({
        path: `/api/auth/workspaces/${workspaceSlug}/states/`,
        method: 'GET',
                        secure: true,                format: "json",        ...params,
    }),            /**
 * @description Возвращает токен интеграции для указанного рабочего пространства, если пользователь имеет необходимые права доступа.
 *
 * @tags Workspace
 * @name GetWorkspaceToken
 * @summary Пространство (токен): получение токена для пространства
 * @request GET:/api/auth/workspaces/{workspaceSlug}/token
 * @secure
 */
getWorkspaceToken: (workspaceSlug: string, params: RequestParams = {}) =>
    this.request<string, ApierrorsDefinedError>({
        path: `/api/auth/workspaces/${workspaceSlug}/token`,
        method: 'GET',
                        secure: true,                        ...params,
    }),            /**
 * @description Генерирует новый токен интеграции для указанного рабочего пространства.
 *
 * @tags Workspace
 * @name ResetWorkspaceToken
 * @summary Пространство (токен): сброс токена для пространства
 * @request POST:/api/auth/workspaces/{workspaceSlug}/token/reset/
 * @secure
 */
resetWorkspaceToken: (workspaceSlug: string, params: RequestParams = {}) =>
    this.request<string, ApierrorsDefinedError>({
        path: `/api/auth/workspaces/${workspaceSlug}/token/reset/`,
        method: 'POST',
                        secure: true,                format: "json",        ...params,
    }),            /**
 * @description Возвращает данные участника для текущего пользователя в рабочем пространстве.
 *
 * @tags Workspace
 * @name GetWorkspaceMemberMe
 * @summary Пространство: получение информации о текущем участнике рабочего пространства
 * @request GET:/api/auth/workspaces/{workspaceSlug}/workspace-members/me/
 * @secure
 */
getWorkspaceMemberMe: (workspaceSlug: string, params: RequestParams = {}) =>
    this.request<DtoWorkspaceMember, ApierrorsDefinedError>({
        path: `/api/auth/workspaces/${workspaceSlug}/workspace-members/me/`,
        method: 'GET',
                        secure: true,        type: ContentType.Json,        format: "json",        ...params,
    }),    }
