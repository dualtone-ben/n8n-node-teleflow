import {
	IAuthenticateGeneric,
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class TeleFlowApi implements ICredentialType {
	name = 'teleFlowApi';
	displayName = 'TeleFlow API';
	documentationUrl = 'https://docs.teleflow.com/api/authentication';
	properties: INodeProperties[] = [
		{
			displayName: 'API Key',
			name: 'apiKey',
			type: 'string',
			typeOptions: {
				password: true,
			},
			default: '',
			required: true,
			description: 'The API key for TeleFlow',
		},
		{
			displayName: 'Base URL',
			name: 'baseUrl',
			type: 'string',
			default: 'https://api.teleflow.com/v1',
			required: true,
			description: 'The base URL for the TeleFlow API',
		},
		{
			displayName: 'Tenant ID',
			name: 'tenantId',
			type: 'string',
			default: '',
			required: false,
			description: 'The tenant ID for multi-tenant environments',
		},
	];

	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			headers: {
				'Authorization': '=Bearer {{$credentials.apiKey}}',
				'X-Tenant-ID': '={{$credentials.tenantId}}',
			},
		},
	};
}
