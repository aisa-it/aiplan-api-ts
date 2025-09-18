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

export class Notifications<SecurityDataType = unknown> extends HttpClient<SecurityDataType>  {

            /**
 * @description Позволяет пользователю получить список своих уведомлений с поддержкой пагинации.
 *
 * @tags Notifications
 * @name GetMyNotificationList
 * @summary Пользователи: Получение уведомлений
 * @request GET:/api/auth/users/me/notifications
 * @secure
 */
getMyNotificationList: (query?: {
  /**
   * Смещение для пагинации
   * @default 0
   */
    offset?: number,
  /**
   * Количество записей на странице
   * @default 100
   */
    limit?: number,

}, params: RequestParams = {}) =>
    this.request<(DaoPaginationResponse & {
    result?: (NotificationsNotificationResponse)[],

}), ApierrorsDefinedError>({
        path: `/api/auth/users/me/notifications`,
        method: 'GET',
        query: query,                secure: true,        type: ContentType.Json,        format: "json",        ...params,
    }),            /**
 * @description Позволяет пользователю пометить определенные уведомления как прочитанные и возвращает количество непрочитанных уведомлений.
 *
 * @tags Notifications
 * @name UpdateToReadMyNotifications
 * @summary Пользователи: Пометить уведомления как прочитанные
 * @request POST:/api/auth/users/me/notifications
 * @secure
 */
updateToReadMyNotifications: (data: AiplanNotificationViewRequest, params: RequestParams = {}) =>
    this.request<AiplanNotificationIdResponse, ApierrorsDefinedError>({
        path: `/api/auth/users/me/notifications`,
        method: 'POST',
                body: data,        secure: true,        type: ContentType.Json,        format: "json",        ...params,
    }),            /**
 * @description Позволяет пользователю удалить все свои уведомления из базы данных.
 *
 * @tags Notifications
 * @name DeleteMyNotifications
 * @summary Пользователи: Удаление всех уведомлений
 * @request DELETE:/api/auth/users/me/notifications
 * @secure
 */
deleteMyNotifications: (params: RequestParams = {}) =>
    this.request<void, ApierrorsDefinedError>({
        path: `/api/auth/users/me/notifications`,
        method: 'DELETE',
                        secure: true,        type: ContentType.Json,                ...params,
    }),    }
