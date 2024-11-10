import { http } from "@/common/helpers/http";
import { getSessionToken } from "@/common/utils/session";
// send-alert
export const sendAlert = async (): Promise<boolean> => {
  try {
    const token = getSessionToken() as string;
    await http(token).post(`/send-alert`);
    return true;
  } catch (error) {
    return false;
  }
};
