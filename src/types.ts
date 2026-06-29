/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface WheelCategory {
  id: string;
  name: string;
  icon: string;
  description: string;
  value: number; // Rating from 1 to 10
  color: string;
}

export interface BookingState {
  name: string;
  email: string;
  phone: string;
  modality: 'online' | 'studio';
  topic: string;
  wheelData?: { category: string; value: number }[];
}
