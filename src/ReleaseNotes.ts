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

export class ReleaseNotes<SecurityDataType = unknown> extends HttpClient<SecurityDataType>  {

            /**
 * @description Возвращает информацию о примечании к релизу по ID
 *
 * @tags ReleaseNotes
 * @name GetReleaseNote
 * @summary Релизы: получение примечания к релизу
 * @request GET:/api/auth/admin/release-notes/{noteId}
 * @secure
 */
getReleaseNote: (noteId: string, params: RequestParams = {}) =>
    this.request<DtoReleaseNoteLight, ApierrorsDefinedError>({
        path: `/api/auth/admin/release-notes/${noteId}`,
        method: 'GET',
                        secure: true,        type: ContentType.Json,        format: "json",        ...params,
    }),            /**
 * @description Возвращает список обновлений
 *
 * @tags ReleaseNotes
 * @name GetProductUpdateList
 * @summary Релизы: получение списка обновлений
 * @request GET:/api/auth/release-notes/
 * @secure
 */
getProductUpdateList: (params: RequestParams = {}) =>
    this.request<(DtoReleaseNoteLight)[], ApierrorsDefinedError>({
        path: `/api/auth/release-notes/`,
        method: 'GET',
                        secure: true,                format: "json",        ...params,
    }),            /**
 * @description Возвращает информацию о примечаниях к релизу
 *
 * @tags ReleaseNotes
 * @name GetRecentReleaseNoteList
 * @summary Релизы: получение примечаний к релизу начиная с указанной версии
 * @request GET:/api/auth/release-notes/{noteId}
 * @secure
 */
getRecentReleaseNoteList: (noteId: string, params: RequestParams = {}) =>
    this.request<(DtoReleaseNoteLight)[], ApierrorsDefinedError>({
        path: `/api/auth/release-notes/${noteId}`,
        method: 'GET',
                        secure: true,        type: ContentType.Json,        format: "json",        ...params,
    }),    }
