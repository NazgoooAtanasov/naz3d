import {
  GetObjectCommand,
  PutObjectCommand,
  S3Client,
} from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { env } from "~/env";

export const r2 = new S3Client({
  region: "auto",
  endpoint: `https://${env.R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
  credentials: {
    accessKeyId: env.R2_ACCESS_KEY_ID,
    secretAccessKey: env.R2_SECRET_ACCESS_KEY,
  },
});

export async function getFileUrl(
  filename: string,
  expiary = 3600,
): Promise<string> {
  return await getSignedUrl(
    r2,
    new GetObjectCommand({ Bucket: "naz3d", Key: filename }),
    { expiresIn: expiary },
  );
}

export async function setFileUrl(
  filename: string,
  expiary = 3600,
): Promise<string> {
  return await getSignedUrl(
    r2,
    new PutObjectCommand({ Bucket: "naz3d", Key: filename }),
    { expiresIn: expiary },
  );
}
