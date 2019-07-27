import {APIGatewayEventRequestContext, S3Event} from "aws-lambda";

export function fileUploaded (event: S3Event, context: APIGatewayEventRequestContext, done: () => void) {
    const key = event.Records[0].s3.object.key;
    console.log(`Got event from object key "${key}"`);
    done();
}
