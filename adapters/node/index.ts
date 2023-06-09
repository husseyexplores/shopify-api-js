import {
  setAbstractFetchFunc,
  setAbstractConvertRequestFunc,
  setAbstractConvertIncomingResponseFunc,
  setAbstractConvertResponseFunc,
  setAbstractConvertHeadersFunc,
  setAbstractRuntimeString,
} from '../../runtime';

import {
  nodeFetch,
  nodeConvertRequest,
  nodeConvertIncomingResponse,
  nodeConvertAndSendResponse,
  nodeConvertAndSetHeaders,
  nodeRuntimeString,
} from './adapter';

setAbstractFetchFunc(nodeFetch);
setAbstractConvertRequestFunc(nodeConvertRequest);
setAbstractConvertIncomingResponseFunc(nodeConvertIncomingResponse);
setAbstractConvertResponseFunc(nodeConvertAndSendResponse);
setAbstractConvertHeadersFunc(nodeConvertAndSetHeaders);
setAbstractRuntimeString(nodeRuntimeString);
