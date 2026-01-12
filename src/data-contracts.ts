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

export interface AiplanBlobResponseDTO {
  /** Содержимое файла (base64 encoded) */
  content?: string;
  /** "base64" */
  encoding?: string;
  /** Является ли файл бинарным */
  is_binary?: boolean;
  /** Путь к файлу */
  path?: string;
  /** Ветка/тег/коммит */
  ref?: string;
  /** SHA объекта */
  sha?: string;
  /** Размер файла */
  size?: number;
}

export interface AiplanBranchDTO {
  /** Является ли веткой по умолчанию */
  is_default?: boolean;
  /** Имя ветки */
  name?: string;
  /** SHA последнего коммита */
  sha?: string;
}

export interface AiplanBranchesResponseDTO {
  /** Список веток */
  branches?: AiplanBranchDTO[];
}

export interface AiplanCommitDTO {
  /** Автор коммита */
  author?: AiplanPersonDTO;
  /** Коммиттер */
  committer?: AiplanPersonDTO;
  /** Сообщение коммита */
  message?: string;
  /** SHA родительских коммитов */
  parent_shas?: string[];
  /** SHA коммита */
  sha?: string;
}

export interface AiplanCommitsResponseDTO {
  /** Список коммитов */
  commits?: AiplanCommitDTO[];
  /** Лимит на страницу */
  limit?: number;
  /** Смещение */
  offset?: number;
  /** Общее количество коммитов */
  total?: number;
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

export interface AiplanEmailRequest {
  new_email: string;
}

export interface AiplanEmailVerifyRequest {
  code: string;
  new_email: string;
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
  description_json?: EditorDocument;
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
  parent?: GithubComGofrsUuidNullUUID;
  parent_detail?: DtoIssueLight | null;
  pinned?: boolean;
  priority?: string | null;
  project?: string;
  project_detail?: DtoProjectLight | null;
  sequence_id?: number;
  short_url?: string;
  sprints?: DtoSprintLight[];
  start_date?: string | null;
  state?: string;
  state_detail?: DtoStateLight | null;
  target_date?: string | null;
  updated_at?: string;
  updated_by?: GithubComGofrsUuidNullUUID | null;
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

export interface AiplanLinkedIssuesIds {
  issue_ids?: string[];
}

export interface AiplanLoginRequest {
  captcha_payload?: string;
  email?: string;
  password?: string;
}

export interface AiplanNewIssueParam {
  assigner_ids?: string[] | null;
  priority?: "urgent" | "high" | "medium" | "low" | null;
  state_id?: string | null;
  target_date?: string | null;
  watcher_ids?: string[] | null;
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

export interface AiplanPersonDTO {
  /** Дата */
  date?: string;
  /** Email */
  email?: string;
  /** Имя */
  name?: string;
}

export interface AiplanPostFeedbackRequest {
  feedback?: string;
  stars?: number;
}

export interface AiplanReactionRequest {
  reaction: string;
}

export interface AiplanRepoInfoDTO {
  /** Количество веток */
  branches_count?: number;
  /** Количество коммитов */
  commits_count?: number;
  /** Ветка по умолчанию */
  default_branch?: string;
  /** Последний коммит */
  last_commit?: AiplanCommitDTO;
  /** Имя репозитория */
  name?: string;
  /** Размер репозитория (байты) */
  size?: number;
  /** Slug workspace */
  workspace?: string;
}

export interface AiplanSubIssuesIds {
  sub_issue_ids?: string[];
}

export interface AiplanTreeEntryDTO {
  /** Режим файла (100644, 040000, etc.) */
  mode?: string;
  /** Имя файла/директории */
  name?: string;
  /** SHA объекта */
  sha?: string;
  /** Размер файла (только для файлов) */
  size?: number;
  /** "file" или "dir" */
  type?: string;
}

export interface AiplanTreeResponseDTO {
  /** Список файлов и директорий */
  entries?: AiplanTreeEntryDTO[];
  /** Путь в репозитории */
  path?: string;
  /** Ветка/тег/коммит */
  ref?: string;
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

export interface AiplanReqForm {
  auth_require?: boolean;
  description?: string;
  end_date?: string | null;
  fields?: TypesFormFields[];
  notification_channels?: TypesFormAnswerNotify;
  target_project_id?: string | null;
  title: string;
}

export interface AiplanRequestAddFavorite {
  workspace?: string;
}

export interface AiplanRequestEmailMember {
  email?: string;
}

export interface AiplanRequestIssueIdList {
  issues_add?: string[];
  issues_remove?: string[];
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

export interface AiplanRequestSprint {
  description?: string;
  end_date?: string | null;
  name?: string;
  start_date?: string | null;
}

export interface AiplanRequestUserIdList {
  members_add?: string[];
  members_remove?: string[];
}

export interface AiplanRoleUpdRequest {
  role: number;
}

export interface AiplanWorkspaceNotificationRequest {
  notification_author_settings_app?: TypesWorkspaceMemberNS;
  notification_author_settings_email?: TypesWorkspaceMemberNS;
  notification_author_settings_tg?: TypesWorkspaceMemberNS;
  notification_settings_app?: TypesWorkspaceMemberNS;
  notification_settings_email?: TypesWorkspaceMemberNS;
  notification_settings_tg?: TypesWorkspaceMemberNS;
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

export interface DtoAddSSHKeyRequest {
  /**
   * @minLength 1
   * @maxLength 255
   */
  name: string;
  public_key: string;
}

export interface DtoAddSSHKeyResponse {
  comment?: string;
  created_at?: string;
  fingerprint?: string;
  id?: string;
  key_type?: string;
  last_used_at?: string;
  name?: string;
}

export interface DtoAssigneeStatItem {
  /** Active количество активных задач */
  active?: number;
  /** Completed количество завершённых задач */
  completed?: number;
  /** DisplayName отображаемое имя пользователя */
  display_name?: string;
  /** UserID идентификатор пользователя */
  user_id?: string;
}

export interface DtoAttachment {
  asset?: DtoFileAsset;
  created_at?: string;
  id?: string;
}

export interface DtoCheckProjectIdentifierAvailabilityResponse {
  /** @example 1 */
  exists?: number;
  /** @example ["[\"PROJECT1\""," \"PROJECT2\"]"] */
  identifiers?: string[];
}

export interface DtoCommentReaction {
  comment_id?: string;
  created_at?: string;
  id?: string;
  reaction?: string;
  updated_at?: string;
  user_id?: string;
}

export interface DtoCreateGitRepositoryRequest {
  /** Branch - начальная ветка репозитория (необязательное поле, по умолчанию: main) */
  branch?: string;
  /** Description - описание репозитория (необязательное поле) */
  description?: string;
  /**
   * Name - название репозитория (обязательное поле)
   * Допустимые символы: a-z, A-Z, 0-9, дефис, подчеркивание, точка
   * @minLength 1
   * @maxLength 100
   */
  name: string;
  /** Private - флаг приватности репозитория (необязательное поле, по умолчанию: false) */
  private?: boolean;
}

export interface DtoCreateGitRepositoryResponse {
  branch?: string;
  clone_url?: string;
  created_at?: string;
  created_by?: DtoUserLight;
  description?: string;
  name?: string;
  path?: string;
  private?: boolean;
  workspace?: string;
}

export interface DtoDeleteGitRepositoryRequest {
  /** Name - название репозитория (обязательное поле) */
  name: string;
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
  llm_content?: boolean;
  parent_doc?: GithubComGofrsUuidNullUUID;
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
  updated_by_id?: GithubComGofrsUuidNullUUID;
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
  new_identifier?: GithubComGofrsUuidNullUUID | null;
  new_value?: string;
  old_entity_detail?: any;
  old_identifier?: GithubComGofrsUuidNullUUID | null;
  old_value?: string | null;
  project_detail?: DtoProjectLight | null;
  sprint_detail?: DtoSprintLight | null;
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
  notification_channels?: TypesFormAnswerNotify | null;
  slug?: string;
  target_project_detail?: DtoProjectLight | null;
  target_project_id?: GithubComGofrsUuidNullUUID | null;
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
  target_project_id?: GithubComGofrsUuidNullUUID | null;
  title: string;
  url?: string;
  workspace?: string;
}

export interface DtoGitConfigInfo {
  git_enabled?: boolean;
  git_repositories_path?: string;
}

export interface DtoGitRepositoryLight {
  branch?: string;
  clone_url?: string;
  created_at?: string;
  /** UUID пользователя */
  created_by?: string;
  description?: string;
  name?: string;
  path?: string;
  private?: boolean;
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
  description_json?: EditorDocument;
  description_stripped?: string | null;
  description_type?: number;
  draft?: boolean;
  estimate_point?: number;
  id?: string;
  issue_inline_attachments?: DtoFileAsset[];
  issue_link?: DtoIssueLinkLight[] | null;
  label_details?: DtoLabelLight[] | null;
  name?: string;
  parent?: GithubComGofrsUuidNullUUID;
  parent_detail?: DtoIssueLight | null;
  pinned?: boolean;
  priority?: string | null;
  project?: string;
  project_detail?: DtoProjectLight | null;
  sequence_id?: number;
  short_url?: string;
  sprints?: DtoSprintLight[];
  start_date?: string | null;
  state?: string;
  state_detail?: DtoStateLight | null;
  target_date?: string | null;
  updated_at?: string;
  updated_by?: GithubComGofrsUuidNullUUID | null;
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
  actor_id?: GithubComGofrsUuidNullUUID | null;
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
  reply_to_comment_id?: GithubComGofrsUuidNullUUID | null;
  updated_at?: string;
  updated_by_id?: GithubComGofrsUuidNullUUID;
  url?: string;
  workspace_id?: string;
}

export interface DtoIssueCommentLight {
  comment_html?: string;
  comment_stripped?: string;
  id?: string;
  url?: string;
}

export interface DtoIssueCounters {
  /** Active количество активных задач (не completed и не cancelled) */
  active?: number;
  /** Cancelled количество отменённых задач */
  cancelled?: number;
  /** Completed количество завершённых задач */
  completed?: number;
  /** Total общее количество задач */
  total?: number;
}

export interface DtoIssueLight {
  id?: string;
  name?: string;
  priority?: string | null;
  sequence_id?: number;
  short_url?: string;
  state?: string;
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

export interface DtoIssueLockResponse {
  locked_by?: DtoUserLight;
  locked_until?: string;
  ok?: boolean;
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
  comments_count?: number;
  completed_at?: string | null;
  created_at?: string;
  desc_highlighted?: string;
  description_html?: string;
  description_json?: EditorDocument;
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
  parent?: GithubComGofrsUuidNullUUID;
  parent_detail?: DtoIssueLight | null;
  pinned?: boolean;
  priority?: string | null;
  project?: string;
  project_detail?: DtoProjectLight | null;
  sequence_id?: number;
  short_url?: string;
  sprints?: DtoSprintLight[];
  start_date?: string | null;
  state?: string;
  state_detail?: DtoStateLight | null;
  sub_issues_count?: number;
  target_date?: string | null;
  updated_at?: string;
  updated_by?: GithubComGofrsUuidNullUUID | null;
  url?: string;
  watcher_details?: DtoUserLight[] | null;
  workspace?: string;
  workspace_detail?: DtoWorkspaceLight | null;
}

export interface DtoJoinProjectsSuccessResponse {
  /** @example "Projects joined successfully" */
  message?: string;
}

export interface DtoLabelLight {
  color?: string;
  description?: string;
  id?: string;
  name?: string;
  project?: string;
}

export interface DtoLabelStatItem {
  /** Color цвет метки в HEX формате */
  color?: string;
  /** Count количество задач с этой меткой */
  count?: number;
  /** LabelID идентификатор метки */
  label_id?: string;
  /** Name название метки */
  name?: string;
}

export interface DtoLastWorkspaceResponse {
  project_details?: any;
  workspace_details?: any;
}

export interface DtoListGitRepositoriesResponse {
  repositories?: DtoGitRepositoryLight[];
  total?: number;
}

export interface DtoListSSHKeysResponse {
  keys?: DtoSSHKeyDTO[];
  total?: number;
}

export interface DtoMonthlyCount {
  /** Count количество */
  count?: number;
  /** Month месяц в формате "YYYY-MM" */
  month?: string;
}

export interface DtoNewIssueID {
  id?: string;
}

export interface DtoNotificationIdResponse {
  count?: number;
}

export interface DtoOverdueStats {
  /** Count количество просроченных задач */
  count?: number;
  /** OldestDate дата самой старой просроченной задачи */
  oldest_date?: string | null;
}

export interface DtoPasswordResponse {
  message?: string;
  status?: number;
}

export interface DtoPriorityStats {
  /** High высокий приоритет */
  high?: number;
  /** Low низкий приоритет */
  low?: number;
  /** Medium средний приоритет */
  medium?: number;
  /** None без приоритета */
  none?: number;
  /** Urgent срочные задачи */
  urgent?: number;
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

export interface DtoProjectStats {
  /** AssigneeStats статистика по исполнителям (опционально, топ-50) */
  assignee_stats?: DtoAssigneeStatItem[] | null;
  /** ByPriority распределение по приоритетам */
  by_priority?: DtoPriorityStats;
  /** ByState распределение по статусам */
  by_state?: DtoStateStatItem[];
  /** ByStateGroup распределение по группам статусов */
  by_state_group?: DtoStateGroupStats;
  /** Issues общие счётчики задач */
  issues?: DtoIssueCounters;
  /** LabelStats статистика по меткам (опционально, топ-50) */
  label_stats?: DtoLabelStatItem[] | null;
  /** Overdue статистика просроченных задач */
  overdue?: DtoOverdueStats;
  /** Project базовая информация о проекте */
  project?: DtoProjectStatsProject;
  /** SprintStats статистика по спринтам (опционально, последние 50) */
  sprint_stats?: DtoSprintStatItem[] | null;
  /** Timeline временная статистика (опционально, за 12 месяцев) */
  timeline?: DtoTimelineStats | null;
}

export interface DtoProjectStatsProject {
  /** ID идентификатор проекта */
  id?: string;
  /** Identifier короткий идентификатор проекта (например, "PORTAL") */
  identifier?: string;
  /** Name название проекта */
  name?: string;
  /** TotalMembers общее количество участников проекта */
  total_members?: number;
}

export interface DtoReleaseNoteLight {
  body?: string;
  id?: string;
  published_at?: string;
  tag_name?: string;
}

export interface DtoRequestAnswer {
  value?: any;
}

export interface DtoResponseAnswers {
  fields?: TypesFormFields[];
  form?: DtoFormLight;
}

export interface DtoResponseSubIssueList {
  state_distribution?: Record<string, number>;
  sub_issues?: DtoIssue[];
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

export interface DtoRulesScriptResponse {
  rules_script?: string | null;
}

export interface DtoSSHConfigResponse {
  ssh_enabled?: boolean;
  ssh_host?: string;
  ssh_port?: number;
}

export interface DtoSSHKeyDTO {
  comment?: string;
  created_at?: string;
  fingerprint?: string;
  id?: string;
  key_type?: string;
  last_used_at?: string;
  name?: string;
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

export interface DtoSprint {
  created_at?: string;
  created_by?: DtoUserLight;
  description?: string;
  end_date?: string;
  id?: string;
  issues?: DtoIssueLight[];
  name?: string;
  sequence_id?: number;
  short_url?: string;
  start_date?: string;
  stats?: TypesSprintStats;
  updated_at?: string;
  updated_by?: DtoUserLight | null;
  url?: string;
  view_props?: TypesViewProps;
  watchers?: DtoUserLight[];
  workspace?: DtoWorkspaceLight;
}

export interface DtoSprintLight {
  description?: string;
  end_date?: string;
  id?: string;
  name?: string;
  sequence_id?: number;
  short_url?: string;
  start_date?: string;
  stats?: TypesSprintStats;
  url?: string;
}

export interface DtoSprintStatItem {
  /** Completed количество завершённых задач в спринте */
  completed?: number;
  /** Name название спринта */
  name?: string;
  /** SprintID идентификатор спринта */
  sprint_id?: string;
  /** Total общее количество задач в спринте */
  total?: number;
}

export interface DtoStateGroupStats {
  /** Backlog задачи в бэклоге */
  backlog?: number;
  /** Cancelled отменённые задачи */
  cancelled?: number;
  /** Completed завершённые задачи */
  completed?: number;
  /** Started задачи в работе */
  started?: number;
  /** Unstarted задачи не начатые */
  unstarted?: number;
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

export interface DtoStateStatItem {
  /** Color цвет статуса в HEX формате */
  color?: string;
  /** Count количество задач с этим статусом */
  count?: number;
  /** Group группа статуса (backlog, unstarted, started, completed, cancelled) */
  group?: string;
  /** Name название статуса */
  name?: string;
  /** StateID идентификатор статуса */
  state_id?: string;
}

export interface DtoTimelineStats {
  /** CompletedByMonth количество завершённых задач по месяцам */
  completed_by_month?: DtoMonthlyCount[];
  /** CreatedByMonth количество созданных задач по месяцам */
  created_by_month?: DtoMonthlyCount[];
}

export interface DtoUpdateRulesScriptRequest {
  /** @maxLength 10000 */
  rules_script?: string | null;
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
  last_workspace_id?: GithubComGofrsUuidNullUUID | null;
  last_workspace_slug?: string | null;
  notification_count?: number;
  settings?: TypesUserSettings;
  status?: string | null;
  status_emoji?: string | null;
  status_end_date?: string | null;
  telegram_id?: number | null;
  theme?: TypesTheme;
  tutorial?: number;
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

export interface DtoWorkspaceLimitsInfo {
  attachments_max?: number;
  attachments_remains?: number;
  invites_max?: number;
  invites_remains?: number;
  projects_max?: number;
  projects_remains?: number;
  tariff_name?: string;
}

export interface DtoWorkspaceMember {
  editable_by_admin?: boolean;
  id?: string;
  member?: DtoUserLight;
  member_id?: string;
  notification_author_settings_app?: TypesWorkspaceMemberNS;
  notification_author_settings_email?: TypesWorkspaceMemberNS;
  notification_author_settings_tg?: TypesWorkspaceMemberNS;
  notification_settings_app?: TypesWorkspaceMemberNS;
  notification_settings_email?: TypesWorkspaceMemberNS;
  notification_settings_tg?: TypesWorkspaceMemberNS;
  role?: number;
}

export interface DtoWorkspaceMemberLight {
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

export interface EditorDocument {
  elements?: any[];
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

export interface GithubComGofrsUuidNullUUID {
  uuid?: string;
  valid?: boolean;
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

export interface TypesFormAnswerNotify {
  app?: boolean;
  email?: boolean;
  telegram?: boolean;
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
  sprints?: string[];
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

export interface TypesSprintStats {
  all_issues?: number;
  cancelled?: number;
  completed?: number;
  in_progress?: number;
  pending?: number;
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
  assignedToMe?: boolean;
  authoredToMe?: boolean;
  group_by?: string;
  orderDesc?: boolean;
  order_by?: string;
  projects?: string[];
  states?: string[];
  watchedToMe?: boolean;
  workspaces?: string[];
}

export interface TypesViewProps {
  activeTab?: string;
  autoSave?: boolean;
  columns_to_show?: string[];
  draft?: boolean;
  filters?: TypesViewFilters;
  group_tables_hide?: Record<string, boolean>;
  hideSubIssues?: boolean;
  issueView?: "list" | "kanban" | "calendar" | "gantt_chart";
  page_size?: number | null;
  showEmptyGroups?: boolean;
  showOnlyActive?: boolean;
}

export interface TypesWorkspaceMemberNS {
  disable_doc_attachment?: boolean;
  disable_doc_comment?: boolean;
  disable_doc_create?: boolean;
  disable_doc_delete?: boolean;
  disable_doc_desc?: boolean;
  disable_doc_move?: boolean;
  disable_doc_role?: boolean;
  disable_doc_title?: boolean;
  disable_doc_watchers?: boolean;
  disable_workspace_desc?: boolean;
  disable_workspace_doc?: boolean;
  disable_workspace_form?: boolean;
  disable_workspace_integration?: boolean;
  disable_workspace_logo?: boolean;
  disable_workspace_member?: boolean;
  disable_workspace_name?: boolean;
  disable_workspace_owner?: boolean;
  disable_workspace_project?: boolean;
  disable_workspace_role?: boolean;
  disable_workspace_token?: boolean;
}
