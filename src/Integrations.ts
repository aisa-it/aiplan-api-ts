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
import { TypesWeekdayShort, AiplanAddDocToFavoritesRequest, AiplanAddProjectToFavoritesRequest, AiplanCheckProjectIdentifierAvailabilityResponse, AiplanCreateProjectRequest, AiplanCreateWorkspaceRequest, AiplanEmailCaptchaRequest, AiplanFilterParams, AiplanGetRulesLogfilterRequest, AiplanIssueCreateRequest, AiplanIssueLinkRequest, AiplanIssueLockResponse, AiplanJiraInfoRequest, AiplanJoinProjectsRequest, AiplanJoinProjectsSuccessResponse, AiplanLinkedIssuesIds, AiplanLoginRequest, AiplanNewIssueID, AiplanNotificationIdResponse, AiplanNotificationViewRequest, AiplanPasswordRequest, AiplanPasswordResponse, AiplanPostFeedbackRequest, AiplanReactionRequest, AiplanResponseSubIssueList, AiplanSubIssuesIds, AiplanUpdateStateRequest, AiplanUserCreateRequest, AiplanUserUpdateRequest, AiplanProjectNotificationRequest, AiplanReqAnswer, AiplanReqForm, AiplanRequestAddFavorite, AiplanRequestEmailMember, AiplanRequestMembersInvite, AiplanRequestMessage, AiplanRequestRoleMember, AiplanRespAnswers, AiplanResponseLastWorkspace, AiplanRoleUpdRequest, AltchaChallenge, ApierrorsDefinedError, DaoPaginationResponse, DtoAttachment, DtoCommentReaction, DtoDoc, DtoDocComment, DtoDocFavorites, DtoDocLight, DtoEntityActivityFull, DtoFileAsset, DtoForm, DtoFormAnswer, DtoFormLight, DtoHistoryBody, DtoHistoryBodyLight, DtoIssue, DtoIssueBlockerLight, DtoIssueComment, DtoIssueCommentLight, DtoIssueLight, DtoIssueLinkLight, DtoIssueSearchResult, DtoIssueTemplate, DtoIssueWithCount, DtoLabelLight, DtoProject, DtoProjectFavorites, DtoProjectLight, DtoProjectMember, DtoProjectMemberLight, DtoReleaseNoteLight, DtoRulesLog, DtoSearchFilterFull, DtoSearchFilterLight, DtoStateLight, DtoTariffication, DtoUser, DtoUserFeedback, DtoUserLight, DtoWorkspace, DtoWorkspaceFavorites, DtoWorkspaceLight, DtoWorkspaceMember, DtoWorkspaceMemberLight, DtoWorkspaceWithCount, EntityJiraInfo, EntityPrioritiesMapping, IntegrationsIntegration, IssuesImportFailedAttachment, IssuesImportImportStatus, JiraAvatarUrls, JiraIssueLinkType, JiraIssueType, JiraPriority, JiraProjectCategory, NotificationsNotificationDetailResponse, NotificationsNotificationResponse, TypesActivityTable, TypesActivityTableDay, TypesFormFields, TypesIssuesListFilters, TypesProjectMemberNS, TypesTheme, TypesUserSettings, TypesValidationRule, TypesViewFilters, TypesViewProps, TypesWorkspaceMemberNS } from "./data-contracts"

export class Integrations<SecurityDataType = unknown> extends HttpClient<SecurityDataType>  {

            /**
 * @description Отменяет запущенный импорт
 *
 * @tags Integrations
 * @name CancelJiraImport
 * @summary Интеграции (Jira): отмена запущенного импорта
 * @request POST:/api/auth/import/jira/cancel/{importId}
 * @secure
 */
cancelJiraImport: (importId: string, params: RequestParams = {}) =>
    this.request<void, ApierrorsDefinedError>({
        path: `/api/auth/import/jira/cancel/${importId}`,
        method: 'POST',
                        secure: true,        type: ContentType.Json,                ...params,
    }),            /**
 * @description Возвращает информацию о Jira на основе предоставленных учетных данных и URL
 *
 * @tags Integrations
 * @name GetJiraInfo
 * @summary Интеграции (Jira): получение информации о Jira
 * @request POST:/api/auth/import/jira/info
 * @secure
 */
getJiraInfo: (data: AiplanJiraInfoRequest, params: RequestParams = {}) =>
    this.request<EntityJiraInfo, ApierrorsDefinedError>({
        path: `/api/auth/import/jira/info`,
        method: 'POST',
                body: data,        secure: true,        type: ContentType.Json,        format: "json",        ...params,
    }),            /**
 * @description Запускает процесс импорта проекта из Jira в указанное рабочее пространство
 *
 * @tags Integrations
 * @name StartJiraImport
 * @summary Интеграции (Jira): начало импорта проекта из Jira
 * @request POST:/api/auth/import/jira/start/{projectKey}
 * @secure
 */
startJiraImport: (projectKey: string, data: AiplanJiraInfoRequest, params: RequestParams = {}) =>
    this.request<Record<string,string>, ApierrorsDefinedError>({
        path: `/api/auth/import/jira/start/${projectKey}`,
        method: 'POST',
                body: data,        secure: true,        type: ContentType.Json,        format: "json",        ...params,
    }),            /**
 * @description Возвращает список всех импортов, инициированных текущим пользователем
 *
 * @tags Integrations
 * @name GetMyImportList
 * @summary Интеграции (Jira): получение моих импортов
 * @request GET:/api/auth/import/jira/status
 * @secure
 */
getMyImportList: (params: RequestParams = {}) =>
    this.request<Record<string,any>, ApierrorsDefinedError>({
        path: `/api/auth/import/jira/status`,
        method: 'GET',
                        secure: true,        type: ContentType.Json,        format: "json",        ...params,
    }),            /**
 * @description Возвращает статус конкретного импорта по его ID
 *
 * @tags Integrations
 * @name GetJiraImportStatus
 * @summary Интеграции (Jira): получение статуса импорта из Jira
 * @request GET:/api/auth/import/jira/status/{importId}
 * @secure
 */
getJiraImportStatus: (importId: string, params: RequestParams = {}) =>
    this.request<IssuesImportImportStatus, ApierrorsDefinedError>({
        path: `/api/auth/import/jira/status/${importId}`,
        method: 'GET',
                        secure: true,        type: ContentType.Json,        format: "json",        ...params,
    }),            /**
 * @description Возвращает ссылку для подключения к Telegram боту уведомлений, если он доступен
 *
 * @tags Integrations
 * @name GetTgBotLink
 * @summary Интеграции: получение ссылки на Telegram бота
 * @request GET:/api/auth/notification-bot-link/
 */
getTgBotLink: (params: RequestParams = {}) =>
    this.request<Record<string,boolean>, ApierrorsDefinedError>({
        path: `/api/auth/notification-bot-link/`,
        method: 'GET',
                                        format: "json",        ...params,
    }),            /**
 * @description Перенаправляет пользователя на файл, хранящийся в MinIO, по имени файла или ID
 *
 * @tags Integrations
 * @name RedirectToMinioFile
 * @summary Интеграции: перенаправление на файл в MinIO
 * @request GET:/api/file/{fileName}
 * @secure
 */
redirectToMinioFile: (fileName: string, params: RequestParams = {}) =>
    this.request<any, void | ApierrorsDefinedError>({
        path: `/api/file/${fileName}`,
        method: 'GET',
                        secure: true,                        ...params,
    }),    }
