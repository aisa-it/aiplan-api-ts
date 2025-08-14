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

import {
  AiplanNotificationIdResponse,
  AiplanNotificationViewRequest,
  DaoPaginationResponse,
  ErrdefsDefinedError,
  NotificationsNotificationResponse,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Notifications<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * @description Позволяет пользователю получить список своих уведомлений с поддержкой пагинации.
   *
   * @tags Notifications
   * @name GetMyNotificationList
   * @summary Пользователи: Получение уведомлений
   * @request GET:/api/auth/users/me/notifications
   * @secure
   */
  getMyNotificationList = (
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
    params: RequestParams = {},
  ) =>
    this.request<
      DaoPaginationResponse & {
        result?: NotificationsNotificationResponse[];
      },
      ErrdefsDefinedError
    >({
      path: `/api/auth/users/me/notifications`,
      method: "GET",
      query: query,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Позволяет пользователю пометить определенные уведомления как прочитанные и возвращает количество непрочитанных уведомлений.
   *
   * @tags Notifications
   * @name UpdateToReadMyNotifications
   * @summary Пользователи: Пометить уведомления как прочитанные
   * @request POST:/api/auth/users/me/notifications
   * @secure
   */
  updateToReadMyNotifications = (
    data: AiplanNotificationViewRequest,
    params: RequestParams = {},
  ) =>
    this.request<AiplanNotificationIdResponse, ErrdefsDefinedError>({
      path: `/api/auth/users/me/notifications`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Позволяет пользователю удалить все свои уведомления из базы данных.
   *
   * @tags Notifications
   * @name DeleteMyNotifications
   * @summary Пользователи: Удаление всех уведомлений
   * @request DELETE:/api/auth/users/me/notifications
   * @secure
   */
  deleteMyNotifications = (params: RequestParams = {}) =>
    this.request<void, ErrdefsDefinedError>({
      path: `/api/auth/users/me/notifications`,
      method: "DELETE",
      secure: true,
      type: ContentType.Json,
      ...params,
    });
}
