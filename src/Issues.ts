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
import { TypesWeekdayShort, AiplanAddDocToFavoritesRequest, AiplanAddProjectToFavoritesRequest, AiplanCheckProjectIdentifierAvailabilityResponse, AiplanCreateProjectRequest, AiplanCreateWorkspaceRequest, AiplanEmailCaptchaRequest, AiplanFilterParams, AiplanGetRulesLogfilterRequest, AiplanIssueCreateRequest, AiplanIssueLinkRequest, AiplanIssueLockResponse, AiplanJiraInfoRequest, AiplanJoinProjectsRequest, AiplanJoinProjectsSuccessResponse, AiplanLinkedIssuesIds, AiplanLoginRequest, AiplanNewIssueID, AiplanNotificationIdResponse, AiplanNotificationViewRequest, AiplanPasswordRequest, AiplanPasswordResponse, AiplanPostFeedbackRequest, AiplanReactionRequest, AiplanResponseSubIssueList, AiplanSubIssuesIds, AiplanUpdateStateRequest, AiplanUserCreateRequest, AiplanUserUpdateRequest, AiplanProjectNotificationRequest, AiplanReqAnswer, AiplanReqForm, AiplanRequestAddFavorite, AiplanRequestEmailMember, AiplanRequestMembersInvite, AiplanRequestMessage, AiplanRequestRoleMember, AiplanRespAnswers, AiplanResponseLastWorkspace, AiplanRoleUpdRequest, AiplanWorkspaceNotificationRequest, AltchaChallenge, ApierrorsDefinedError, DaoPaginationResponse, DtoAttachment, DtoCommentReaction, DtoDoc, DtoDocComment, DtoDocFavorites, DtoDocLight, DtoEntityActivityFull, DtoFileAsset, DtoForm, DtoFormAnswer, DtoFormLight, DtoHistoryBody, DtoHistoryBodyLight, DtoIssue, DtoIssueBlockerLight, DtoIssueComment, DtoIssueCommentLight, DtoIssueLight, DtoIssueLinkLight, DtoIssueSearchResult, DtoIssueTemplate, DtoIssueWithCount, DtoLabelLight, DtoProject, DtoProjectFavorites, DtoProjectLight, DtoProjectMember, DtoProjectMemberLight, DtoReleaseNoteLight, DtoRulesLog, DtoSearchFilterFull, DtoSearchFilterLight, DtoStateLight, DtoTariffication, DtoUser, DtoUserFeedback, DtoUserLight, DtoWorkspace, DtoWorkspaceFavorites, DtoWorkspaceLight, DtoWorkspaceMember, DtoWorkspaceMemberLight, DtoWorkspaceWithCount, EntityJiraInfo, EntityPrioritiesMapping, IntegrationsIntegration, IssuesImportFailedAttachment, IssuesImportImportStatus, JiraAvatarUrls, JiraIssueLinkType, JiraIssueType, JiraPriority, JiraProjectCategory, NotificationsNotificationDetailResponse, NotificationsNotificationResponse, TypesActivityTable, TypesActivityTableDay, TypesFormFields, TypesIssuesListFilters, TypesProjectMemberNS, TypesTheme, TypesUserSettings, TypesValidationRule, TypesViewFilters, TypesViewProps, TypesWorkspaceMemberNS } from "./data-contracts"

export class Issues<SecurityDataType = unknown> extends HttpClient<SecurityDataType>  {

            /**
 * @description Выполняет поиск задач с использованием фильтров и сортировки
 *
 * @tags Issues
 * @name GetIssueList
 * @summary Задачи: поиск задач
 * @request POST:/api/auth/issues/search
 * @secure
 */
getIssueList: (filters: TypesIssuesListFilters, query?: {
  /**
   * Включать подзадачи
   * @default true
   */
    show_sub_issues?: boolean,
  /**
   * Поле для сортировки
   * @default ""sequence_id""
   */
    order_by?: string,
  /**
   * Поле для группировки результатов
   * @default """"
   */
    group_by?: string,
  /**
   * Смещение для пагинации
   * @default -1
   */
    offset?: number,
  /**
   * Лимит записей
   * @default 100
   */
    limit?: number,
  /**
   * Сортировка по убыванию
   * @default true
   */
    desc?: boolean,
  /**
   * Вернуть только количество
   * @default false
   */
    only_count?: boolean,

}, params: RequestParams = {}) =>
    this.request<DtoIssueSearchResult, ApierrorsDefinedError>({
        path: `/api/auth/issues/search`,
        method: 'POST',
        query: query,        body: filters,        secure: true,        type: ContentType.Json,        format: "json",        ...params,
    }),            /**
 * @description Мигрирует задачу из одного проекта в другой с опциональной поддержкой связанных задач и удаления исходной задачи
 *
 * @tags Issues
 * @name MigrateIssues
 * @summary Задачи (миграции): миграция задачи рабочего пространства
 * @request POST:/api/auth/workspaces/{workspaceSlug}/issues/migrate
 * @secure
 */
migrateIssues: (workspaceSlug: string, query: {
  /** ID целевого проекта */
    target_project: string,
  /** ID исходной задачи */
    src_issue: string,
  /**
   * Мигрировать связанные задачи
   * @default false
   */
    linked_issues?: boolean,
  /**
   * Удалить исходную задачу после миграции
   * @default false
   */
    delete_src?: boolean,
  /**
   * Создать не достающие label, state
   * @default false
   */
    create_entities?: boolean,

}, params: RequestParams = {}) =>
    this.request<AiplanNewIssueID, Record<string,any> | ApierrorsDefinedError>({
        path: `/api/auth/workspaces/${workspaceSlug}/issues/migrate`,
        method: 'POST',
        query: query,                secure: true,        type: ContentType.Json,        format: "json",        ...params,
    }),            /**
 * @description Мигрирует все задачи с определенной меткой из одного проекта в другой с опциональной поддержкой связанных задач и удаления исходных задач
 *
 * @tags Issues
 * @name MigrateIssuesByLabel
 * @summary Задачи (миграции): миграция задач по метке рабочего пространства
 * @request POST:/api/auth/workspaces/{workspaceSlug}/issues/migrate/byLabel
 * @secure
 */
migrateIssuesByLabel: (workspaceSlug: string, query: {
  /** ID целевого проекта */
    target_project: string,
  /** ID исходной метки */
    src_label: string,
  /**
   * Мигрировать связанные задачи
   * @default false
   */
    linked_issues?: boolean,
  /**
   * Удалить исходные задачи после миграции
   * @default false
   */
    delete_src?: boolean,
  /**
   * Создать не достающие label, state
   * @default false
   */
    create_entities?: boolean,

}, params: RequestParams = {}) =>
    this.request<void, Record<string,any> | ApierrorsDefinedError>({
        path: `/api/auth/workspaces/${workspaceSlug}/issues/migrate/byLabel`,
        method: 'POST',
        query: query,                secure: true,        type: ContentType.Json,                ...params,
    }),            /**
 * @description Удаляет несколько задач в проекте по их ID
 *
 * @tags Issues
 * @name DeleteIssuesBulk
 * @summary Задачи: массовое удаление задач
 * @request DELETE:/api/auth/workspaces/{workspaceSlug}/projects/{projectId}/bulk-delete-issues
 * @secure
 */
deleteIssuesBulk: (workspaceSlug: string, projectId: string, issuesIds: (string)[], params: RequestParams = {}) =>
    this.request<Record<string,string>, ApierrorsDefinedError>({
        path: `/api/auth/workspaces/${workspaceSlug}/projects/${projectId}/bulk-delete-issues`,
        method: 'DELETE',
                body: issuesIds,        secure: true,        type: ContentType.Json,        format: "json",        ...params,
    }),            /**
 * @description Создает новую задачу в проекте с указанными параметрами и настройками
 *
 * @tags Issues
 * @name CreateIssue
 * @summary Задачи: создание новой задачи
 * @request POST:/api/auth/workspaces/{workspaceSlug}/projects/{projectId}/issues/
 * @secure
 */
createIssue: (workspaceSlug: string, projectId: string, issue: AiplanIssueCreateRequest, params: RequestParams = {}) =>
    this.request<AiplanNewIssueID, ApierrorsDefinedError>({
        path: `/api/auth/workspaces/${workspaceSlug}/projects/${projectId}/issues/`,
        method: 'POST',
                body: issue,        secure: true,        type: ContentType.FormData,        format: "json",        ...params,
    }),            /**
 * @description Возвращает информацию о задаче в проекте по её идентификатору или номеру последовательности
 *
 * @tags Issues
 * @name GetIssue
 * @summary Задачи: получение задачи
 * @request GET:/api/auth/workspaces/{workspaceSlug}/projects/{projectId}/issues/{issueIdOrSeq}
 * @secure
 */
getIssue: (workspaceSlug: string, projectId: string, issueIdOrSeq: string, params: RequestParams = {}) =>
    this.request<DtoIssue, ApierrorsDefinedError>({
        path: `/api/auth/workspaces/${workspaceSlug}/projects/${projectId}/issues/${issueIdOrSeq}`,
        method: 'GET',
                        secure: true,        type: ContentType.Json,        format: "json",        ...params,
    }),            /**
 * @description Удаляет задачу из проекта. Только автор задачи или администратор могут выполнить удаление.
 *
 * @tags Issues
 * @name DeleteIssue
 * @summary Задачи: удаление задачи
 * @request DELETE:/api/auth/workspaces/{workspaceSlug}/projects/{projectId}/issues/{issueIdOrSeq}
 * @secure
 */
deleteIssue: (workspaceSlug: string, projectId: string, issueIdOrSeq: string, params: RequestParams = {}) =>
    this.request<void, ApierrorsDefinedError>({
        path: `/api/auth/workspaces/${workspaceSlug}/projects/${projectId}/issues/${issueIdOrSeq}`,
        method: 'DELETE',
                        secure: true,        type: ContentType.Json,                ...params,
    }),            /**
 * @description Обновляет указанные поля задачи, такие как состояние, исполнители, наблюдатели, метки и вложения.
 *
 * @tags Issues
 * @name UpdateIssue
 * @summary Задачи: частичное обновление задачи
 * @request PATCH:/api/auth/workspaces/{workspaceSlug}/projects/{projectId}/issues/{issueIdOrSeq}
 * @secure
 */
updateIssue: (workspaceSlug: string, projectId: string, issueIdOrSeq: string, data: {
  /** задача в формате JSON */
    issue: string,
  /** Файлы для добавления в задачу */
    files?: File,

}, params: RequestParams = {}) =>
    this.request<DtoIssue, ApierrorsDefinedError>({
        path: `/api/auth/workspaces/${workspaceSlug}/projects/${projectId}/issues/${issueIdOrSeq}`,
        method: 'PATCH',
                body: data,        secure: true,        type: ContentType.FormData,        format: "json",        ...params,
    }),            /**
 * @description Возвращает активность по задаче без учета комментариев, с возможностью фильтрации по полю
 *
 * @tags Issues
 * @name GetIssueActivityList
 * @summary Задачи: получение активности по задаче
 * @request GET:/api/auth/workspaces/{workspaceSlug}/projects/{projectId}/issues/{issueIdOrSeq}/activities
 * @secure
 */
getIssueActivityList: (workspaceSlug: string, projectId: string, issueIdOrSeq: string, query?: {
  /**
   * Смещение для пагинации
   * @default 0
   */
    offset?: number,
  /**
   * Лимит записей
   * @default 100
   */
    limit?: number,
  /** Поле активности для фильтрации (например: state) */
    field?: string,

}, params: RequestParams = {}) =>
    this.request<(DaoPaginationResponse & {
    result?: (DtoEntityActivityFull)[],

}), ApierrorsDefinedError>({
        path: `/api/auth/workspaces/${workspaceSlug}/projects/${projectId}/issues/${issueIdOrSeq}/activities`,
        method: 'GET',
        query: query,                secure: true,        type: ContentType.Json,        format: "json",        ...params,
    }),            /**
 * @description Поиск задач, которые могут быть добавлены в качестве блокирующих для текущей задачи
 *
 * @tags Issues
 * @name GetAvailableBlockersIssueList
 * @summary Задачи: поиск доступных блокирующих задач
 * @request GET:/api/auth/workspaces/{workspaceSlug}/projects/{projectId}/issues/{issueIdOrSeq}/blockers-issues/available
 * @secure
 */
getAvailableBlockersIssueList: (workspaceSlug: string, projectId: string, issueIdOrSeq: string, query?: {
  /** Смещение для пагинации */
    offset?: number,
  /** Лимит записей */
    limit?: number,
  /** Поле для сортировки */
    order_by?: string,
  /** Сортировка по убыванию */
    desc?: boolean,
  /** Поисковый запрос */
    search_query?: string,

}, params: RequestParams = {}) =>
    this.request<(DaoPaginationResponse & {
    result?: (DtoIssue)[],

}), ApierrorsDefinedError>({
        path: `/api/auth/workspaces/${workspaceSlug}/projects/${projectId}/issues/${issueIdOrSeq}/blockers-issues/available`,
        method: 'GET',
        query: query,                secure: true,        type: ContentType.Json,        format: "json",        ...params,
    }),            /**
 * @description Поиск задач, которые могут быть добавлены в качестве блокируемых текущей задачей
 *
 * @tags Issues
 * @name GetAvailableBlocksIssueList
 * @summary Задачи: поиск доступных блокируемых задач
 * @request GET:/api/auth/workspaces/{workspaceSlug}/projects/{projectId}/issues/{issueIdOrSeq}/blocks-issues/available
 * @secure
 */
getAvailableBlocksIssueList: (workspaceSlug: string, projectId: string, issueIdOrSeq: string, query?: {
  /** Смещение для пагинации */
    offset?: number,
  /** Лимит записей */
    limit?: number,
  /** Поле для сортировки */
    order_by?: string,
  /** Сортировка по убыванию */
    desc?: boolean,
  /** Поисковый запрос */
    search_query?: string,

}, params: RequestParams = {}) =>
    this.request<(DaoPaginationResponse & {
    result?: (DtoIssue)[],

}), ApierrorsDefinedError>({
        path: `/api/auth/workspaces/${workspaceSlug}/projects/${projectId}/issues/${issueIdOrSeq}/blocks-issues/available`,
        method: 'GET',
        query: query,                secure: true,        type: ContentType.Json,        format: "json",        ...params,
    }),            /**
 * @description Возвращает список комментариев к задаче с возможностью пагинации
 *
 * @tags Issues
 * @name GetIssueCommentList
 * @summary Задачи (комментарии): получение списка комментариев к задаче
 * @request GET:/api/auth/workspaces/{workspaceSlug}/projects/{projectId}/issues/{issueIdOrSeq}/comments
 * @secure
 */
getIssueCommentList: (workspaceSlug: string, projectId: string, issueIdOrSeq: string, query?: {
  /**
   * Смещение для пагинации
   * @default 0
   */
    offset?: number,
  /**
   * Лимит записей
   * @default 100
   */
    limit?: number,

}, params: RequestParams = {}) =>
    this.request<(DaoPaginationResponse & {
    result?: (DtoIssueComment)[],

}), ApierrorsDefinedError>({
        path: `/api/auth/workspaces/${workspaceSlug}/projects/${projectId}/issues/${issueIdOrSeq}/comments`,
        method: 'GET',
        query: query,                secure: true,        type: ContentType.Json,        format: "json",        ...params,
    }),            /**
 * @description Добавляет новый комментарий к задаче с возможностью добавления вложений
 *
 * @tags Issues
 * @name CreateIssueComment
 * @summary Задачи (комментарии): добавление комментария к задаче
 * @request POST:/api/auth/workspaces/{workspaceSlug}/projects/{projectId}/issues/{issueIdOrSeq}/comments
 * @secure
 */
createIssueComment: (workspaceSlug: string, projectId: string, issueIdOrSeq: string, data: {
  /** Текст комментария в формате JSON */
    comment: string,
  /** Вложения для комментария */
    files?: File,

}, params: RequestParams = {}) =>
    this.request<DtoIssueComment, ApierrorsDefinedError>({
        path: `/api/auth/workspaces/${workspaceSlug}/projects/${projectId}/issues/${issueIdOrSeq}/comments`,
        method: 'POST',
                body: data,        secure: true,        type: ContentType.FormData,        format: "json",        ...params,
    }),            /**
 * @description Получает данные комментария к задаче
 *
 * @tags Issues
 * @name GetIssueComment
 * @summary Задачи (комментарии): получение комментария к задаче
 * @request GET:/api/auth/workspaces/{workspaceSlug}/projects/{projectId}/issues/{issueIdOrSeq}/comments/{commentId}
 * @secure
 */
getIssueComment: (workspaceSlug: string, projectId: string, issueIdOrSeq: string, commentId: string, params: RequestParams = {}) =>
    this.request<DtoIssueComment, ApierrorsDefinedError>({
        path: `/api/auth/workspaces/${workspaceSlug}/projects/${projectId}/issues/${issueIdOrSeq}/comments/${commentId}`,
        method: 'GET',
                        secure: true,                format: "json",        ...params,
    }),            /**
 * @description Удаляет указанный комментарий из задачи
 *
 * @tags Issues
 * @name DeleteIssueComment
 * @summary Задачи(комментарии): удаление комментария к задаче
 * @request DELETE:/api/auth/workspaces/{workspaceSlug}/projects/{projectId}/issues/{issueIdOrSeq}/comments/{commentId}
 * @secure
 */
deleteIssueComment: (workspaceSlug: string, projectId: string, issueIdOrSeq: string, commentId: string, params: RequestParams = {}) =>
    this.request<void, ApierrorsDefinedError>({
        path: `/api/auth/workspaces/${workspaceSlug}/projects/${projectId}/issues/${issueIdOrSeq}/comments/${commentId}`,
        method: 'DELETE',
                        secure: true,        type: ContentType.Json,                ...params,
    }),            /**
 * @description Изменяет текст и вложения для указанного комментария задачи
 *
 * @tags Issues
 * @name UpdateIssueComment
 * @summary Задачи (комментарии): изменение комментария к задаче
 * @request PATCH:/api/auth/workspaces/{workspaceSlug}/projects/{projectId}/issues/{issueIdOrSeq}/comments/{commentId}
 * @secure
 */
updateIssueComment: (workspaceSlug: string, projectId: string, issueIdOrSeq: string, commentId: string, data: {
  /** Обновленный текст комментария в формате JSON */
    comment: string,
  /** Новые вложения для комментария */
    files?: File,

}, params: RequestParams = {}) =>
    this.request<DtoIssueComment, ApierrorsDefinedError>({
        path: `/api/auth/workspaces/${workspaceSlug}/projects/${projectId}/issues/${issueIdOrSeq}/comments/${commentId}`,
        method: 'PATCH',
                body: data,        secure: true,        type: ContentType.FormData,        format: "json",        ...params,
    }),            /**
 * @description Добавляет реакцию пользователя к комментарию задачи
 *
 * @tags Issues
 * @name AddCommentReaction
 * @summary Задачи (комментарии): добавление реакции к комментарию
 * @request POST:/api/auth/workspaces/{workspaceSlug}/projects/{projectId}/issues/{issueIdOrSeq}/comments/{commentId}/reactions
 * @secure
 */
addCommentReaction: (workspaceSlug: string, projectId: string, issueIdOrSeq: string, commentId: string, data: Record<string,string>, params: RequestParams = {}) =>
    this.request<DtoCommentReaction, ApierrorsDefinedError>({
        path: `/api/auth/workspaces/${workspaceSlug}/projects/${projectId}/issues/${issueIdOrSeq}/comments/${commentId}/reactions`,
        method: 'POST',
                body: data,        secure: true,        type: ContentType.Json,        format: "json",        ...params,
    }),            /**
 * @description Удаляет указанную реакцию пользователя с комментария задачи
 *
 * @tags Issues
 * @name RemoveCommentReaction
 * @summary Задачи (комментарии): удаление реакции с комментария
 * @request DELETE:/api/auth/workspaces/{workspaceSlug}/projects/{projectId}/issues/{issueIdOrSeq}/comments/{commentId}/reactions/{reaction}
 * @secure
 */
removeCommentReaction: (workspaceSlug: string, projectId: string, issueIdOrSeq: string, commentId: string, reaction: string, params: RequestParams = {}) =>
    this.request<void, ApierrorsDefinedError>({
        path: `/api/auth/workspaces/${workspaceSlug}/projects/${projectId}/issues/${issueIdOrSeq}/comments/${commentId}/reactions/${reaction}`,
        method: 'DELETE',
                        secure: true,        type: ContentType.Json,                ...params,
    }),            /**
 * @description Блокирует описание задачи за вызвавшим пользователем, так что только он сможет сохранять описание
 *
 * @tags Issues
 * @name IssueDescriptionLock
 * @summary Задачи: Блокировка описания задачи за пользователем
 * @request POST:/api/auth/workspaces/{workspaceSlug}/projects/{projectId}/issues/{issueIdOrSeq}/description-lock
 * @secure
 */
issueDescriptionLock: (workspaceSlug: string, projectId: string, issueIdOrSeq: string, params: RequestParams = {}) =>
    this.request<AiplanIssueLockResponse, ApierrorsDefinedError | AiplanIssueLockResponse>({
        path: `/api/auth/workspaces/${workspaceSlug}/projects/${projectId}/issues/${issueIdOrSeq}/description-lock`,
        method: 'POST',
                        secure: true,                format: "json",        ...params,
    }),            /**
 * @description Разблокирует описание задачи
 *
 * @tags Issues
 * @name IssueDescriptionUnlock
 * @summary Задачи: Разблокировка описания задачи
 * @request POST:/api/auth/workspaces/{workspaceSlug}/projects/{projectId}/issues/{issueIdOrSeq}/description-unlock
 * @secure
 */
issueDescriptionUnlock: (workspaceSlug: string, projectId: string, issueIdOrSeq: string, params: RequestParams = {}) =>
    this.request<void, ApierrorsDefinedError>({
        path: `/api/auth/workspaces/${workspaceSlug}/projects/${projectId}/issues/${issueIdOrSeq}/description-unlock`,
        method: 'POST',
                        secure: true,                        ...params,
    }),            /**
 * @description Возвращает историю изменений и комментариев для задачи, отсортированных по времени создания
 *
 * @tags Issues
 * @name GetIssueHistoryList
 * @summary Задачи: получение истории задачи
 * @request GET:/api/auth/workspaces/{workspaceSlug}/projects/{projectId}/issues/{issueIdOrSeq}/history
 * @secure
 */
getIssueHistoryList: (workspaceSlug: string, projectId: string, issueIdOrSeq: string, params: RequestParams = {}) =>
    this.request<(any)[], ApierrorsDefinedError>({
        path: `/api/auth/workspaces/${workspaceSlug}/projects/${projectId}/issues/${issueIdOrSeq}/history`,
        method: 'GET',
                        secure: true,        type: ContentType.Json,        format: "json",        ...params,
    }),            /**
 * @description Возвращает список всех вложений, прикрепленных к задаче
 *
 * @tags Issues
 * @name GetIssueAttachmentList
 * @summary Задачи (вложения): получение вложений задачи
 * @request GET:/api/auth/workspaces/{workspaceSlug}/projects/{projectId}/issues/{issueIdOrSeq}/issue-attachments
 * @secure
 */
getIssueAttachmentList: (workspaceSlug: string, projectId: string, issueIdOrSeq: string, params: RequestParams = {}) =>
    this.request<((DaoPaginationResponse & {
    result?: (DtoAttachment)[],

}))[], ApierrorsDefinedError>({
        path: `/api/auth/workspaces/${workspaceSlug}/projects/${projectId}/issues/${issueIdOrSeq}/issue-attachments`,
        method: 'GET',
                        secure: true,        type: ContentType.Json,        format: "json",        ...params,
    }),            /**
 * @description Загружает новое вложение и прикрепляет его к задаче
 *
 * @tags Issues
 * @name CreateIssueAttachments
 * @summary Задачи (вложения): загрузка вложения в задачу
 * @request POST:/api/auth/workspaces/{workspaceSlug}/projects/{projectId}/issues/{issueIdOrSeq}/issue-attachments
 * @secure
 */
createIssueAttachments: (workspaceSlug: string, projectId: string, issueIdOrSeq: string, data: {
  /** Файл для загрузки */
    asset: File,

}, params: RequestParams = {}) =>
    this.request<DtoAttachment, ApierrorsDefinedError>({
        path: `/api/auth/workspaces/${workspaceSlug}/projects/${projectId}/issues/${issueIdOrSeq}/issue-attachments`,
        method: 'POST',
                body: data,        secure: true,        type: ContentType.FormData,        format: "json",        ...params,
    }),            /**
 * @description Скачивает все вложения задачи в виде ZIP-архива
 *
 * @tags Issues
 * @name DownloadIssueAttachments
 * @summary Задачи (вложения): скачать все вложения в ZIP
 * @request GET:/api/auth/workspaces/{workspaceSlug}/projects/{projectId}/issues/{issueIdOrSeq}/issue-attachments/all/
 * @secure
 */
downloadIssueAttachments: (workspaceSlug: string, projectId: string, issueIdOrSeq: string, data: {
  /** Файл для загрузки */
    asset: File,

}, params: RequestParams = {}) =>
    this.request<File, ApierrorsDefinedError>({
        path: `/api/auth/workspaces/${workspaceSlug}/projects/${projectId}/issues/${issueIdOrSeq}/issue-attachments/all/`,
        method: 'GET',
                body: data,        secure: true,        type: ContentType.FormData,                ...params,
    }),            /**
 * @description Удаляет указанное вложение, прикрепленное к задаче
 *
 * @tags Issues
 * @name DeleteIssueAttachment
 * @summary Задачи (вложения): удаление вложения из задачи
 * @request DELETE:/api/auth/workspaces/{workspaceSlug}/projects/{projectId}/issues/{issueIdOrSeq}/issue-attachments/{attachmentId}
 * @secure
 */
deleteIssueAttachment: (workspaceSlug: string, projectId: string, issueIdOrSeq: string, attachmentId: string, params: RequestParams = {}) =>
    this.request<void, ApierrorsDefinedError>({
        path: `/api/auth/workspaces/${workspaceSlug}/projects/${projectId}/issues/${issueIdOrSeq}/issue-attachments/${attachmentId}`,
        method: 'DELETE',
                        secure: true,        type: ContentType.Json,                ...params,
    }),            /**
 * @description Возвращает список всех ссылок, прикрепленных к задаче
 *
 * @tags Issues
 * @name GetIssueLinkList
 * @summary Задачи (ссылки): получение списка ссылок в задаче
 * @request GET:/api/auth/workspaces/{workspaceSlug}/projects/{projectId}/issues/{issueIdOrSeq}/issue-links
 * @secure
 */
getIssueLinkList: (workspaceSlug: string, projectId: string, issueIdOrSeq: string, params: RequestParams = {}) =>
    this.request<(DtoIssueLinkLight)[], ApierrorsDefinedError>({
        path: `/api/auth/workspaces/${workspaceSlug}/projects/${projectId}/issues/${issueIdOrSeq}/issue-links`,
        method: 'GET',
                        secure: true,        type: ContentType.Json,        format: "json",        ...params,
    }),            /**
 * @description Создает новую ссылку, прикрепленную к задаче
 *
 * @tags Issues
 * @name CreateIssueLink
 * @summary Задачи (ссылки): создание ссылки в задаче
 * @request POST:/api/auth/workspaces/{workspaceSlug}/projects/{projectId}/issues/{issueIdOrSeq}/issue-links
 * @secure
 */
createIssueLink: (workspaceSlug: string, projectId: string, issueIdOrSeq: string, data: AiplanIssueLinkRequest, params: RequestParams = {}) =>
    this.request<DtoIssueLinkLight, ApierrorsDefinedError>({
        path: `/api/auth/workspaces/${workspaceSlug}/projects/${projectId}/issues/${issueIdOrSeq}/issue-links`,
        method: 'POST',
                body: data,        secure: true,        type: ContentType.Json,        format: "json",        ...params,
    }),            /**
 * @description Удаляет указанную ссылку, прикрепленную к задаче
 *
 * @tags Issues
 * @name DeleteIssueLink
 * @summary Задачи (ссылки): удаление ссылки в задаче
 * @request DELETE:/api/auth/workspaces/{workspaceSlug}/projects/{projectId}/issues/{issueIdOrSeq}/issue-links/{linkId}
 * @secure
 */
deleteIssueLink: (workspaceSlug: string, projectId: string, issueIdOrSeq: string, linkId: string, params: RequestParams = {}) =>
    this.request<void, ApierrorsDefinedError>({
        path: `/api/auth/workspaces/${workspaceSlug}/projects/${projectId}/issues/${issueIdOrSeq}/issue-links/${linkId}`,
        method: 'DELETE',
                        secure: true,        type: ContentType.Json,                ...params,
    }),            /**
 * @description Обновляет существующую ссылку в задаче
 *
 * @tags Issues
 * @name UpdateIssueLink
 * @summary Задачи (ссылки): обновление ссылки в задаче
 * @request PATCH:/api/auth/workspaces/{workspaceSlug}/projects/{projectId}/issues/{issueIdOrSeq}/issue-links/{linkId}
 * @secure
 */
updateIssueLink: (workspaceSlug: string, projectId: string, issueIdOrSeq: string, linkId: string, data: AiplanIssueLinkRequest, params: RequestParams = {}) =>
    this.request<DtoIssueLinkLight, ApierrorsDefinedError>({
        path: `/api/auth/workspaces/${workspaceSlug}/projects/${projectId}/issues/${issueIdOrSeq}/issue-links/${linkId}`,
        method: 'PATCH',
                body: data,        secure: true,        type: ContentType.Json,        format: "json",        ...params,
    }),            /**
 * @description Возвращает список задач, связанных с указанной задачей
 *
 * @tags Issues
 * @name GetIssueLinkedIssueList
 * @summary Задачи: получение связанных задач
 * @request GET:/api/auth/workspaces/{workspaceSlug}/projects/{projectId}/issues/{issueIdOrSeq}/linked-issues
 * @secure
 */
getIssueLinkedIssueList: (workspaceSlug: string, projectId: string, issueIdOrSeq: string, params: RequestParams = {}) =>
    this.request<(DtoIssue)[], ApierrorsDefinedError>({
        path: `/api/auth/workspaces/${workspaceSlug}/projects/${projectId}/issues/${issueIdOrSeq}/linked-issues`,
        method: 'GET',
                        secure: true,        type: ContentType.Json,        format: "json",        ...params,
    }),            /**
 * @description Устанавливает список связанных задач для указанной задачи
 *
 * @tags Issues
 * @name AddIssueLinkedIssueList
 * @summary Задачи: установка связанных задач
 * @request POST:/api/auth/workspaces/{workspaceSlug}/projects/{projectId}/issues/{issueIdOrSeq}/linked-issues
 * @secure
 */
addIssueLinkedIssueList: (workspaceSlug: string, projectId: string, issueIdOrSeq: string, data: AiplanLinkedIssuesIds, params: RequestParams = {}) =>
    this.request<(DtoIssueLight)[], ApierrorsDefinedError>({
        path: `/api/auth/workspaces/${workspaceSlug}/projects/${projectId}/issues/${issueIdOrSeq}/linked-issues`,
        method: 'POST',
                body: data,        secure: true,        type: ContentType.Json,        format: "json",        ...params,
    }),            /**
 * @description Поиск задач, которые могут быть связаны с текущей задачи
 *
 * @tags Issues
 * @name GetAvailableLinkedIssueList
 * @summary Задачи: поиск доступных для связывания задач
 * @request GET:/api/auth/workspaces/{workspaceSlug}/projects/{projectId}/issues/{issueIdOrSeq}/linked-issues/available/
 * @secure
 */
getAvailableLinkedIssueList: (workspaceSlug: string, projectId: string, issueIdOrSeq: string, query?: {
  /** Смещение для пагинации */
    offset?: number,
  /** Лимит записей */
    limit?: number,
  /** Поле для сортировки */
    order_by?: string,
  /** Сортировка по убыванию */
    desc?: boolean,
  /** Поисковый запрос */
    search_query?: string,

}, params: RequestParams = {}) =>
    this.request<(DaoPaginationResponse & {
    result?: (DtoIssue)[],

}), ApierrorsDefinedError>({
        path: `/api/auth/workspaces/${workspaceSlug}/projects/${projectId}/issues/${issueIdOrSeq}/linked-issues/available/`,
        method: 'GET',
        query: query,                secure: true,        type: ContentType.Json,        format: "json",        ...params,
    }),            /**
 * @description Поиск задач, доступных для назначения в качестве родительских для текущей задачи
 *
 * @tags Issues
 * @name GetAvailableParentIssueList
 * @summary Задачи: поиск доступных родительских задач
 * @request GET:/api/auth/workspaces/{workspaceSlug}/projects/{projectId}/issues/{issueIdOrSeq}/parent-issues/available
 * @secure
 */
getAvailableParentIssueList: (workspaceSlug: string, projectId: string, issueIdOrSeq: string, query?: {
  /** Смещение для пагинации */
    offset?: number,
  /** Лимит записей */
    limit?: number,
  /** Поле для сортировки */
    order_by?: string,
  /** Сортировка по убыванию */
    desc?: boolean,
  /** Поисковый запрос */
    search_query?: string,

}, params: RequestParams = {}) =>
    this.request<(DaoPaginationResponse & {
    result?: (DtoIssue)[],

}), ApierrorsDefinedError>({
        path: `/api/auth/workspaces/${workspaceSlug}/projects/${projectId}/issues/${issueIdOrSeq}/parent-issues/available`,
        method: 'GET',
        query: query,                secure: true,        type: ContentType.Json,        format: "json",        ...params,
    }),            /**
 * @description Возвращает PDF-файл в соответствии с заданными параметрами
 *
 * @tags Issues
 * @name GetIssuePdf
 * @summary Задачи: Получение PDF-файла задачи
 * @request GET:/api/auth/workspaces/{workspaceSlug}/projects/{projectId}/issues/{issueIdOrSeq}/pdf
 * @secure
 */
getIssuePdf: (workspaceSlug: string, projectId: string, issueIdOrSeq: string, params: RequestParams = {}) =>
    this.request<File, ApierrorsDefinedError>({
        path: `/api/auth/workspaces/${workspaceSlug}/projects/${projectId}/issues/${issueIdOrSeq}/pdf`,
        method: 'GET',
                        secure: true,        type: ContentType.Json,                ...params,
    }),            /**
 * @description Возвращает список подзадач для указанной задачи с распределением по состояниям
 *
 * @tags Issues
 * @name GetSubIssueList
 * @summary Задачи: получение списка подзадач
 * @request GET:/api/auth/workspaces/{workspaceSlug}/projects/{projectId}/issues/{issueIdOrSeq}/sub-issues
 * @secure
 */
getSubIssueList: (workspaceSlug: string, projectId: string, issueIdOrSeq: string, params: RequestParams = {}) =>
    this.request<AiplanResponseSubIssueList, ApierrorsDefinedError>({
        path: `/api/auth/workspaces/${workspaceSlug}/projects/${projectId}/issues/${issueIdOrSeq}/sub-issues`,
        method: 'GET',
                        secure: true,        type: ContentType.Json,        format: "json",        ...params,
    }),            /**
 * @description Добавляет указанные задачи как подзадачи для текущей задачи
 *
 * @tags Issues
 * @name AddSubIssueList
 * @summary Задачи: добавление подзадач
 * @request POST:/api/auth/workspaces/{workspaceSlug}/projects/{projectId}/issues/{issueIdOrSeq}/sub-issues
 * @secure
 */
addSubIssueList: (workspaceSlug: string, projectId: string, issueIdOrSeq: string, data: AiplanSubIssuesIds, params: RequestParams = {}) =>
    this.request<(DtoIssueLight)[], ApierrorsDefinedError>({
        path: `/api/auth/workspaces/${workspaceSlug}/projects/${projectId}/issues/${issueIdOrSeq}/sub-issues`,
        method: 'POST',
                body: data,        secure: true,        type: ContentType.Json,        format: "json",        ...params,
    }),            /**
 * @description Поиск задач, доступных для добавления в качестве подзадач
 *
 * @tags Issues
 * @name GetAvailableSubIssueList
 * @summary Задачи: поиск доступных подзадач
 * @request GET:/api/auth/workspaces/{workspaceSlug}/projects/{projectId}/issues/{issueIdOrSeq}/sub-issues/available
 * @secure
 */
getAvailableSubIssueList: (workspaceSlug: string, projectId: string, issueIdOrSeq: string, query?: {
  /** Смещение для пагинации */
    offset?: number,
  /** Лимит записей */
    limit?: number,
  /** Поле для сортировки */
    order_by?: string,
  /** Сортировка по убыванию */
    desc?: boolean,
  /** Поисковый запрос */
    search_query?: string,

}, params: RequestParams = {}) =>
    this.request<(DaoPaginationResponse & {
    result?: (DtoIssue)[],

}), ApierrorsDefinedError>({
        path: `/api/auth/workspaces/${workspaceSlug}/projects/${projectId}/issues/${issueIdOrSeq}/sub-issues/available`,
        method: 'GET',
        query: query,                secure: true,        type: ContentType.Json,        format: "json",        ...params,
    }),            /**
 * @description Перемещает подзадачу выше по списку при ручной сортировке детей
 *
 * @tags Issues
 * @name MoveSubIssueDown
 * @summary Задачи: перемещение подзадачи вверх в списке
 * @request POST:/api/auth/workspaces/{workspaceSlug}/projects/{projectId}/issues/{issueIdOrSeq}/sub-issues/{subIssueId}/down
 * @secure
 */
moveSubIssueDown: (workspaceSlug: string, projectId: number, issueIdOrSeq: string, subIssueId: string, params: RequestParams = {}) =>
    this.request<void, ApierrorsDefinedError>({
        path: `/api/auth/workspaces/${workspaceSlug}/projects/${projectId}/issues/${issueIdOrSeq}/sub-issues/${subIssueId}/down`,
        method: 'POST',
                        secure: true,        type: ContentType.Json,                ...params,
    }),            /**
 * @description Перемещает подзадачу выше по списку при ручной сортировке детей
 *
 * @tags Issues
 * @name MoveSubIssueUp
 * @summary Задачи: перемещение подзадачи вверх в списке
 * @request POST:/api/auth/workspaces/{workspaceSlug}/projects/{projectId}/issues/{issueIdOrSeq}/sub-issues/{subIssueId}/up
 * @secure
 */
moveSubIssueUp: (workspaceSlug: string, projectId: number, issueIdOrSeq: string, subIssueId: string, params: RequestParams = {}) =>
    this.request<void, ApierrorsDefinedError>({
        path: `/api/auth/workspaces/${workspaceSlug}/projects/${projectId}/issues/${issueIdOrSeq}/sub-issues/${subIssueId}/up`,
        method: 'POST',
                        secure: true,        type: ContentType.Json,                ...params,
    }),    }
