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

export enum TypesWeekdayShort {
  Sunday = 0,
  Monday = 1,
  Tuesday = 2,
  Wednesday = 3,
  Thursday = 4,
  Friday = 5,
  Saturday = 6,
}

export interface AiplanAddDocToFavoritesRequest {
  doc: string;
}

export interface AiplanAddProjectToFavoritesRequest {
  /** @example "project123" */
  project: string;
}

export interface AiplanCheckProjectIdentifierAvailabilityResponse {
  /** @example 1 */
  exists?: number;
  /** @example ["[\"PROJECT1\""," \"PROJECT2\"]"] */
  identifiers?: string[];
}

export interface AiplanCreateProjectRequest {
  cover_image?: string;
  default_assignees?: string[];
  default_watchers?: string[];
  /** @example "0" */
  emoji?: string;
  estimate?: string;
  identifier?: string;
  name?: string;
  project_lead?: string;
  public?: boolean;
  rules_script?: string;
}

export interface AiplanCreateWorkspaceRequest {
  logo?: string;
  name?: string;
  owner_id?: string;
  slug?: string;
}

export interface AiplanEmailCaptchaRequest {
  captcha_payload: string;
  email: string;
}

export interface AiplanFilterParams {
  project_ids?: string[];
  search_query?: string;
  workspace_ids?: string[];
}

export interface AiplanGetRulesLogfilterRequest {
  select?: string[];
}

export interface AiplanIssueCreateRequest {
  assignee_details?: DtoUserLight[] | null;
  assignees_list?: string[];
  author_detail?: DtoUserLight | null;
  blocked_issues?: DtoIssueBlockerLight[];
  blocker_issues?: DtoIssueBlockerLight[];
  blockers_list?: string[];
  blocks_list?: string[];
  completed_at?: string | null;
  created_at?: string;
  description_html?: string;
  description_stripped?: string | null;
  description_type?: number;
  draft?: boolean;
  estimate_point?: number;
  id?: string;
  issue_inline_attachments?: DtoFileAsset[];
  issue_link?: DtoIssueLinkLight[] | null;
  label_details?: DtoLabelLight[] | null;
  labels_list?: string[];
  name?: string;
  parent?: string;
  parent_detail?: DtoIssueLight | null;
  priority?: string | null;
  project?: string;
  project_detail?: DtoProjectLight | null;
  sequence_id?: number;
  short_url?: string;
  start_date?: string | null;
  state?: string | null;
  state_detail?: DtoStateLight | null;
  target_date?: string | null;
  updated_at?: string;
  updated_by?: string | null;
  url?: string;
  watcher_details?: DtoUserLight[] | null;
  watchers_list?: string[];
  workspace?: string;
  workspace_detail?: DtoWorkspaceLight | null;
}

export interface AiplanIssueLinkRequest {
  title?: string;
  url?: string;
}

export interface AiplanIssueLockResponse {
  locked_by?: DtoUserLight;
  locked_until?: string;
  ok?: boolean;
}

export interface AiplanJiraInfoRequest {
  block_link_id?: string;
  jira_url?: string;
  priorities_mapping?: EntityPrioritiesMapping;
  relates_link_id?: string[];
  target_workspace_id?: string;
  token?: string;
  username?: string;
}

export interface AiplanJoinProjectsRequest {
  /** @example ["[\"project1\""," \"project2\"]"] */
  project_ids?: string[];
}

export interface AiplanJoinProjectsSuccessResponse {
  /** @example "Projects joined successfully" */
  message?: string;
}

export interface AiplanLinkedIssuesIds {
  issue_ids?: string[];
}

export interface AiplanLoginRequest {
  captcha_payload?: string;
  email?: string;
  password?: string;
}

export interface AiplanNewIssueID {
  id?: string;
}

export interface AiplanNotificationIdResponse {
  count?: number;
}

export interface AiplanNotificationViewRequest {
  ids?: string[];
  viewed_all?: boolean;
}

export interface AiplanPasswordRequest {
  confirm_password: string;
  /** @minLength 8 */
  new_password: string;
}

export interface AiplanPasswordResponse {
  message?: string;
  status?: number;
}

export interface AiplanPostFeedbackRequest {
  feedback?: string;
  stars?: number;
}

export interface AiplanReactionRequest {
  reaction: string;
}

export interface AiplanResponseSubIssueList {
  state_distribution?: Record<string, number>;
  sub_issues?: DtoIssue[];
}

export interface AiplanSubIssuesIds {
  sub_issue_ids?: string[];
}

export interface AiplanUpdateStateRequest {
  color?: string;
  default?: boolean;
  description?: string;
  group?: string;
  group_seq_id?: number;
  name?: string;
  sequence?: number;
}

export interface AiplanUserCreateRequest {
  email?: string;
  first_name?: string;
  last_name?: string;
  password?: string;
  /** optional */
  role?: number;
  /** optional */
  workspace_id?: string;
}

export interface AiplanUserUpdateRequest {
  first_name?: string | null;
  last_name?: string | null;
  settings?: TypesUserSettings | null;
  status?: string | null;
  status_emoji?: string | null;
  status_end_date?: string | null;
  telegram_id?: number | null;
  theme?: TypesTheme | null;
  user_timezone?: string | null;
  username?: string | null;
  view_props?: TypesViewProps | null;
}

export interface AiplanProjectNotificationRequest {
  notification_author_settings_app?: TypesProjectMemberNS;
  notification_author_settings_email?: TypesProjectMemberNS;
  notification_author_settings_tg?: TypesProjectMemberNS;
  notification_settings_app?: TypesProjectMemberNS;
  notification_settings_email?: TypesProjectMemberNS;
  notification_settings_tg?: TypesProjectMemberNS;
}

export interface AiplanReqAnswer {
  value?: any;
}

export interface AiplanReqForm {
  auth_require?: boolean;
  description?: string;
  end_date?: string | null;
  fields?: TypesFormFields[];
  target_project_id?: string | null;
  title: string;
}

export interface AiplanRequestAddFavorite {
  workspace?: string;
}

export interface AiplanRequestEmailMember {
  email?: string;
}

export interface AiplanRequestMembersInvite {
  emails?: {
    email?: string;
    role?: number;
  }[];
}

export interface AiplanRequestMessage {
  members?: string[];
  msg?: string;
  send_at?: string;
  title?: string;
}

export interface AiplanRequestRoleMember {
  role?: number;
}

export interface AiplanRespAnswers {
  fields?: TypesFormFields[];
  form?: DtoFormLight;
}

export interface AiplanResponseLastWorkspace {
  project_details?: any;
  workspace_details?: any;
}

export interface AiplanRoleUpdRequest {
  role: number;
}

export interface AltchaChallenge {
  algorithm?: string;
  challenge?: string;
  maxNumber?: number;
  salt?: string;
  signature?: string;
}

export interface ApierrorsDefinedError {
  code?: number;
  error?: string;
  ru_error?: string;
}

export interface DaoPaginationResponse {
  count?: number;
  limit?: number;
  my_entity?: any;
  offset?: number;
  result?: any;
}

export interface DtoAttachment {
  asset?: DtoFileAsset;
  created_at?: string;
  id?: string;
}

export interface DtoCommentReaction {
  comment_id?: string;
  created_at?: string;
  id?: string;
  reaction?: string;
  updated_at?: string;
  user_id?: string;
}

export interface DtoDoc {
  author?: DtoUserLight;
  breadcrumbs?: string[];
  content?: string;
  created_at?: string;
  doc_inline_attachments?: DtoFileAsset[];
  draft?: boolean;
  editor_ids?: string[];
  editor_role?: number;
  editors?: DtoUserLight[];
  has_child_docs?: boolean;
  id?: string;
  is_favorite?: boolean;
  parent_doc?: string;
  reader_ids?: string[];
  reader_role?: number;
  readers?: DtoUserLight[];
  short_url?: string;
  title?: string;
  update_at?: string;
  update_by?: DtoUserLight;
  url?: string;
  watcher_ids?: string[];
  watchers?: DtoUserLight[];
}

export interface DtoDocComment {
  actor_detail?: DtoUserLight;
  comment_attachments?: DtoFileAsset[];
  comment_html?: string;
  comment_stripped?: string;
  comment_type?: number;
  created_at?: string;
  id?: string;
  original_comment?: DtoDocComment | null;
  reaction_summary?: Record<string, number>;
  reactions?: DtoCommentReaction[];
  updated_at?: string;
  updated_by_id?: string;
  url?: string;
}

export interface DtoDocFavorites {
  doc?: DtoDocLight;
  doc_id?: string;
  id?: string;
}

export interface DtoDocLight {
  draft?: boolean;
  has_child_docs?: boolean;
  id?: string;
  is_favorite?: boolean;
  short_url?: string;
  title?: string;
  url?: string;
}

export interface DtoEntityActivityFull {
  actor_detail?: DtoUserLight | null;
  created_at?: string;
  doc_detail?: DtoDocLight | null;
  entity_type?: string;
  entity_url?: string;
  field?: string | null;
  form_detail?: DtoFormLight | null;
  id?: string;
  issue_detail?: DtoIssueLight | null;
  new_entity_detail?: any;
  new_identifier?: string | null;
  new_value?: string;
  old_entity_detail?: any;
  old_identifier?: string | null;
  old_value?: string | null;
  project_detail?: DtoProjectLight | null;
  state_lag_ms?: number;
  verb?: string;
  workspace_detail?: DtoWorkspaceLight | null;
}

export interface DtoFileAsset {
  content_type?: string;
  id?: string;
  name?: string;
  size?: number;
}

export interface DtoForm {
  active?: boolean;
  auth_require?: boolean;
  author_detail?: DtoUserLight | null;
  description?: string;
  end_date?: string | null;
  fields?: TypesFormFields[];
  id?: string;
  slug?: string;
  target_project_detail?: DtoProjectLight | null;
  target_project_id?: string | null;
  title: string;
  url?: string;
  workspace?: string;
  workspace_detail?: DtoWorkspaceLight | null;
}

export interface DtoFormAnswer {
  attachment?: DtoAttachment | null;
  created_at?: string;
  fields?: TypesFormFields[];
  form?: DtoForm | null;
  id?: string;
  responder?: DtoUserLight | null;
  seq_id?: number;
}

export interface DtoFormLight {
  active?: boolean;
  auth_require?: boolean;
  description?: string;
  end_date?: string | null;
  fields?: TypesFormFields[];
  id?: string;
  slug?: string;
  target_project_id?: string | null;
  title: string;
  url?: string;
  workspace?: string;
}

export interface DtoHistoryBody {
  Id?: string;
  author?: DtoUserLight;
  crated_at?: string;
  current_body?: string;
  current_inline_attachment?: DtoFileAsset[];
  old_body?: string;
  old_inline_attachment?: DtoFileAsset[];
}

export interface DtoHistoryBodyLight {
  Id?: string;
  author?: DtoUserLight;
  crated_at?: string;
}

export interface DtoIssue {
  assignee_details?: DtoUserLight[] | null;
  author_detail?: DtoUserLight | null;
  blocked_issues?: DtoIssueBlockerLight[];
  blocker_issues?: DtoIssueBlockerLight[];
  completed_at?: string | null;
  created_at?: string;
  description_html?: string;
  description_stripped?: string | null;
  description_type?: number;
  draft?: boolean;
  estimate_point?: number;
  id?: string;
  issue_inline_attachments?: DtoFileAsset[];
  issue_link?: DtoIssueLinkLight[] | null;
  label_details?: DtoLabelLight[] | null;
  name?: string;
  parent?: string;
  parent_detail?: DtoIssueLight | null;
  priority?: string | null;
  project?: string;
  project_detail?: DtoProjectLight | null;
  sequence_id?: number;
  short_url?: string;
  start_date?: string | null;
  state?: string | null;
  state_detail?: DtoStateLight | null;
  target_date?: string | null;
  updated_at?: string;
  updated_by?: string | null;
  url?: string;
  watcher_details?: DtoUserLight[] | null;
  workspace?: string;
  workspace_detail?: DtoWorkspaceLight | null;
}

export interface DtoIssueBlockerLight {
  block?: string;
  blocked_by?: string;
  blocked_issue_detail?: DtoIssueLight | null;
  blocker_issue_detail?: DtoIssueLight | null;
  id?: string;
}

export interface DtoIssueComment {
  actor_detail?: DtoUserLight | null;
  actor_id?: string | null;
  comment_attachments?: DtoFileAsset[];
  comment_html?: string;
  comment_stripped?: string;
  created_at?: string;
  id?: string;
  issue_id?: string;
  original_comment?: DtoIssueComment | null;
  project_id?: string;
  reaction_summary?: Record<string, number>;
  reactions?: DtoCommentReaction[];
  reply_to_comment_id?: string | null;
  updated_at?: string;
  updated_by_id?: string;
  url?: string;
  workspace_id?: string;
}

export interface DtoIssueCommentLight {
  comment_html?: string;
  comment_stripped?: string;
  id?: string;
  url?: string;
}

export interface DtoIssueLight {
  id?: string;
  name?: string;
  priority?: string | null;
  sequence_id?: number;
  short_url?: string;
  state?: string | null;
  state_detail?: DtoStateLight | null;
  url?: string;
}

export interface DtoIssueLinkLight {
  created_at?: string;
  id?: string;
  title?: string;
  updated_at?: string;
  url?: string;
}

export interface DtoIssueSearchResult {
  count?: number;
  issues?: DtoIssueWithCount[];
  limit?: number;
  offset?: number;
}

export interface DtoIssueTemplate {
  created_at?: string;
  created_by_id?: string;
  id?: string;
  name?: string;
  project_id?: string;
  template?: string;
  updated_at?: string;
  updated_by_id?: string;
  workspace_id?: string;
}

export interface DtoIssueWithCount {
  assignee_details?: DtoUserLight[] | null;
  attachment_count?: number;
  author_detail?: DtoUserLight | null;
  blocked_issues?: DtoIssueBlockerLight[];
  blocker_issues?: DtoIssueBlockerLight[];
  completed_at?: string | null;
  created_at?: string;
  desc_highlighted?: string;
  description_html?: string;
  description_stripped?: string | null;
  description_type?: number;
  draft?: boolean;
  estimate_point?: number;
  id?: string;
  issue_inline_attachments?: DtoFileAsset[];
  issue_link?: DtoIssueLinkLight[] | null;
  label_details?: DtoLabelLight[] | null;
  link_count?: number;
  linked_issues_count?: number;
  name?: string;
  name_highlighted?: string;
  parent?: string;
  parent_detail?: DtoIssueLight | null;
  priority?: string | null;
  project?: string;
  project_detail?: DtoProjectLight | null;
  sequence_id?: number;
  short_url?: string;
  start_date?: string | null;
  state?: string | null;
  state_detail?: DtoStateLight | null;
  sub_issues_count?: number;
  target_date?: string | null;
  updated_at?: string;
  updated_by?: string | null;
  url?: string;
  watcher_details?: DtoUserLight[] | null;
  workspace?: string;
  workspace_detail?: DtoWorkspaceLight | null;
}

export interface DtoLabelLight {
  color?: string;
  description?: string;
  id?: string;
  name?: string;
  project?: string;
}

export interface DtoProject {
  cover_image?: string | null;
  created_at?: string;
  current_user_membership?: DtoProjectMemberLight | null;
  default_assignees?: string[];
  default_assignees_details?: DtoProjectMemberLight[];
  default_watchers?: string[];
  default_watchers_details?: DtoProjectMemberLight[];
  /** @example "0" */
  emoji?: string;
  id?: string;
  identifier?: string;
  is_favorite?: boolean;
  logo?: string | null;
  name?: string;
  name_highlighted?: string;
  project_lead?: string;
  project_lead_detail?: DtoUserLight | null;
  public?: boolean;
  rules_script?: string | null;
  total_members?: number;
  updated_at?: string;
  url?: string;
  workspace?: string;
  workspace_detail?: DtoWorkspaceLight | null;
}

export interface DtoProjectFavorites {
  id?: string;
  project_detail?: DtoProjectLight | null;
  project_id?: string;
}

export interface DtoProjectLight {
  cover_image?: string | null;
  current_user_membership?: DtoProjectMemberLight | null;
  default_assignees?: string[];
  default_assignees_details?: DtoProjectMemberLight[];
  default_watchers?: string[];
  default_watchers_details?: DtoProjectMemberLight[];
  /** @example "0" */
  emoji?: string;
  id?: string;
  identifier?: string;
  is_favorite?: boolean;
  logo?: string | null;
  name?: string;
  name_highlighted?: string;
  project_lead?: string;
  public?: boolean;
  total_members?: number;
  url?: string;
  workspace?: string;
}

export interface DtoProjectMember {
  id?: string;
  is_default_assignee?: boolean;
  is_default_watcher?: boolean;
  member?: DtoUserLight | null;
  member_id?: string;
  notification_author_settings_app?: TypesProjectMemberNS;
  notification_author_settings_email?: TypesProjectMemberNS;
  notification_author_settings_tg?: TypesProjectMemberNS;
  notification_settings_app?: TypesProjectMemberNS;
  notification_settings_email?: TypesProjectMemberNS;
  notification_settings_tg?: TypesProjectMemberNS;
  project?: DtoProjectLight | null;
  project_id?: string;
  role?: number;
  view_props?: TypesViewProps;
  workspace_admin?: boolean;
}

export interface DtoProjectMemberLight {
  id?: string;
  is_default_assignee?: boolean;
  is_default_watcher?: boolean;
  member?: DtoUserLight | null;
  member_id?: string;
  project?: DtoProjectLight | null;
  project_id?: string;
  role?: number;
  workspace_admin?: boolean;
}

export interface DtoReleaseNoteLight {
  body?: string;
  id?: string;
  published_at?: string;
  tag_name?: string;
}

export interface DtoRulesLog {
  created_at?: string;
  function_name?: string | null;
  id?: string;
  issue_detail?: DtoIssueLight;
  lua_err?: string | null;
  msg?: string;
  project_detail?: DtoProjectLight;
  time?: string;
  type?: string;
  user_detail?: DtoUserLight;
  workspace_detail?: DtoWorkspaceLight;
}

export interface DtoSearchFilterFull {
  author_detail?: DtoUserLight | null;
  author_id?: string;
  description?: string;
  filter?: TypesIssuesListFilters;
  id?: string;
  name?: string;
  public?: boolean;
  short_url?: string;
  url?: string;
}

export interface DtoSearchFilterLight {
  description?: string;
  filter?: TypesIssuesListFilters;
  id?: string;
  name?: string;
  public?: boolean;
  short_url?: string;
  url?: string;
}

export interface DtoStateLight {
  color?: string;
  default?: boolean;
  description?: string;
  group?: string;
  id?: string;
  name?: string;
  project?: string;
  sequence?: number;
  workspace?: string;
}

export interface DtoTariffication {
  attachments_allow?: boolean;
  issues_limit?: number;
  projects_limit?: number;
  user_detail?: DtoUserLight;
  user_id?: string;
  users_limit?: number;
  workspaces_limit?: number;
}

export interface DtoUser {
  attachments_allow?: boolean | null;
  avatar?: string;
  avatar_id?: string | null;
  blocked_until?: string;
  created_at?: string;
  email?: string;
  first_name?: string;
  id?: string;
  is_active?: boolean;
  is_bot?: boolean;
  is_integration?: boolean;
  is_onboarded?: boolean;
  is_superuser?: boolean;
  last_active?: string | null;
  last_name?: string;
  last_workspace_id?: string | null;
  last_workspace_slug?: string | null;
  notification_count?: number;
  settings?: TypesUserSettings;
  status?: string | null;
  status_emoji?: string | null;
  status_end_date?: string | null;
  telegram_id?: number | null;
  theme?: TypesTheme;
  user_timezone?: string;
  username?: string | null;
  view_props?: TypesViewProps;
}

export interface DtoUserFeedback {
  feedback?: string;
  stars?: number;
  user_detail?: DtoUserLight;
  user_id?: string;
}

export interface DtoUserLight {
  avatar?: string;
  avatar_id?: string | null;
  blocked_until?: string;
  created_at?: string;
  email?: string;
  first_name?: string;
  id?: string;
  is_active?: boolean;
  is_bot?: boolean;
  is_integration?: boolean;
  is_onboarded?: boolean;
  is_superuser?: boolean;
  last_active?: string | null;
  last_name?: string;
  status?: string | null;
  status_emoji?: string | null;
  status_end_date?: string | null;
  telegram_id?: number | null;
  user_timezone?: string;
  username?: string | null;
}

export interface DtoWorkspace {
  created_at?: string;
  current_user_membership?: DtoWorkspaceMember | null;
  description?: string;
  id?: string;
  is_favorite?: boolean;
  logo?: string | null;
  name?: string;
  owner?: DtoUserLight | null;
  owner_id?: string;
  slug?: string;
  updated_at?: string;
  url?: string;
}

export interface DtoWorkspaceFavorites {
  id?: string;
  workspace_detail?: DtoWorkspace | null;
  workspace_id?: string;
}

export interface DtoWorkspaceLight {
  id?: string;
  logo?: string | null;
  name?: string;
  owner_id?: string;
  slug?: string;
  url?: string;
}

export interface DtoWorkspaceMember {
  editable_by_admin?: boolean;
  id?: string;
  member?: DtoUserLight;
  member_id?: string;
  role?: number;
}

export interface DtoWorkspaceWithCount {
  created_at?: string;
  current_user_membership?: DtoWorkspaceMember | null;
  description?: string;
  id?: string;
  is_favorite?: boolean;
  logo?: string | null;
  name?: string;
  name_highlighted?: string;
  owner?: DtoUserLight | null;
  owner_id?: string;
  slug?: string;
  total_members?: number;
  total_projects?: number;
  updated_at?: string;
  url?: string;
}

export interface EntityJiraInfo {
  link_types?: JiraIssueLinkType[];
  priorities?: JiraPriority[];
  projects?: {
    avatarUrls?: JiraAvatarUrls;
    expand?: string;
    id?: string;
    issueTypes?: JiraIssueType[];
    key?: string;
    name?: string;
    projectCategory?: JiraProjectCategory;
    projectTypeKey?: string;
    self?: string;
  }[];
}

export interface EntityPrioritiesMapping {
  high_id?: string;
  low_id?: string;
  medium_id?: string;
  null_id?: string;
  urgent_id?: string;
}

export interface IntegrationsIntegration {
  added?: boolean;
  avatar?: string;
  description?: string;
  name?: string;
}

export interface IssuesImportFailedAttachment {
  attachment_id?: string;
  key?: string;
  name?: string;
}

export interface IssuesImportImportStatus {
  actor_details?: DtoUserLight;
  actor_id?: string;
  done_issues?: number;
  end_at?: string;
  error?: string;
  failed_attachments?: IssuesImportFailedAttachment[];
  finished?: boolean;
  global_progress?: number;
  id?: string;
  imported_attachments?: number;
  progress?: number;
  project_key?: string;
  stage?: string;
  start_at?: string;
  target_workspace_id?: string;
  total_attachments?: number;
  total_issues?: number;
}

export interface JiraAvatarUrls {
  "16x16"?: string;
  "24x24"?: string;
  "32x32"?: string;
  "48x48"?: string;
}

export interface JiraIssueLinkType {
  id?: string;
  inward?: string;
  name?: string;
  outward?: string;
  self?: string;
}

export interface JiraIssueType {
  avatarId?: number;
  description?: string;
  iconUrl?: string;
  id?: string;
  name?: string;
  self?: string;
  subtask?: boolean;
}

export interface JiraPriority {
  description?: string;
  iconUrl?: string;
  id?: string;
  name?: string;
  self?: string;
  statusColor?: string;
}

export interface JiraProjectCategory {
  description?: string;
  id?: string;
  name?: string;
  self?: string;
}

export interface NotificationsNotificationDetailResponse {
  doc?: DtoDocLight;
  form?: DtoFormLight;
  issue?: DtoIssueLight;
  issue_comment?: DtoIssueCommentLight;
  project?: DtoProjectLight;
  user?: DtoUserLight;
  workspace?: DtoWorkspaceLight;
}

export interface NotificationsNotificationResponse {
  created_at?: string;
  data?: any;
  detail?: NotificationsNotificationDetailResponse;
  id?: string;
  type?: string;
  /**
   * NewEntity any                        `json:"new_entity,omitempty"`
   * OldEntity any                        `json:"old_entity,omitempty"`
   */
  viewed?: boolean;
}

export type TypesActivityTable = Record<string, TypesActivityTableDay>;

export interface TypesActivityTableDay {
  count?: number;
  weekday?: TypesWeekdayShort;
}

export interface TypesFormFields {
  label?: string;
  required?: boolean;
  type?: string;
  validate?: TypesValidationRule | null;
  value?: any;
}

export interface TypesIssuesListFilters {
  assigned_to_me?: boolean;
  assignees?: string[];
  authored_by_me?: boolean;
  authors?: string[];
  labels?: string[];
  only_active?: boolean;
  priorities?: string[];
  projects?: string[];
  search_query?: string;
  states?: string[];
  watched_by_me?: boolean;
  watchers?: string[];
  workspace_slugs?: string[];
  workspaces?: string[];
}

export interface TypesProjectMemberNS {
  disable_assignees?: boolean;
  disable_attachments?: boolean;
  disable_blockedBy?: boolean;
  disable_blocks?: boolean;
  disable_comments?: boolean;
  disable_deadline?: boolean;
  disable_desc?: boolean;
  disable_issue_new?: boolean;
  disable_issue_transfer?: boolean;
  disable_labels?: boolean;
  disable_linked?: boolean;
  disable_links?: boolean;
  disable_name?: boolean;
  disable_parent?: boolean;
  disable_priority?: boolean;
  disable_project_default_assignee?: boolean;
  disable_project_default_watcher?: boolean;
  disable_project_identifier?: boolean;
  disable_project_label?: boolean;
  disable_project_logo?: boolean;
  disable_project_member?: boolean;
  disable_project_name?: boolean;
  disable_project_owner?: boolean;
  disable_project_public?: boolean;
  disable_project_role?: boolean;
  disable_project_status?: boolean;
  disable_project_template?: boolean;
  disable_state?: boolean;
  disable_sub_issue?: boolean;
  disable_targetDate?: boolean;
  disable_watchers?: boolean;
  notify_before_deadline?: number | null;
}

export interface TypesTheme {
  contrast?: boolean | null;
  dark?: boolean | null;
  open_in_new?: boolean | null;
  system?: boolean | null;
}

export interface TypesUserSettings {
  app_notification_mute?: boolean;
  deadline_notification?: number;
  email_notification_mute?: boolean;
  telegram_notification_mute?: boolean;
}

export interface TypesValidationRule {
  opt?: any[];
  validation_type?: string;
  value_type?: string;
}

export interface TypesViewFilters {
  group_by?: string;
  orderDesc?: boolean;
  order_by?: string;
  projects?: string[];
  states?: string[];
  workspaces?: string[];
}

export interface TypesViewProps {
  activeTab?: string;
  autoSave?: boolean;
  columns_to_show?: string[];
  draft?: boolean;
  filters?: TypesViewFilters;
  group_tables_hide?: Record<string, boolean>;
  issueView?: "list" | "kanban" | "calendar" | "gantt_chart";
  page_size?: number | null;
  showEmptyGroups?: boolean;
  showOnlyActive?: boolean;
  showSubIssues?: boolean;
}
