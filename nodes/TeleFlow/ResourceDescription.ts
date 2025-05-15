import { INodeProperties } from 'n8n-workflow';

export const resourceOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: [
					'account',
					'accountAudit',
					'billingEntry',
					'callDetailRecord',
					'carrier',
					'device',
					'deviceTemplate',
					'emailTemplate',
					'featureCode',
					'file',
					'flow',
					'flowTemplate',
					'lcr',
					'mobileSim',
					'numberPort',
					'phoneNumber',
					'provision',
					'report',
					'reseller',
					'sipTrunk',
					'tariff',
					'tariffCode',
					'tariffProfile',
					'tenant',
					'tenantAudit',
					'transcription',
					'user',
					'voice',
					'voiceMailMessage',
				],
			},
		},
		options: [
			{
				name: 'Create',
				value: 'create',
				description: 'Create a new resource',
				action: 'Create a new resource',
			},
			{
				name: 'Delete',
				value: 'delete',
				description: 'Delete a resource',
				action: 'Delete a resource',
			},
			{
				name: 'Get',
				value: 'get',
				description: 'Get a resource by ID',
				action: 'Get a resource by ID',
			},
			{
				name: 'Get Many',
				value: 'getAll',
				description: 'Get many resources',
				action: 'Get many resources',
			},
			{
				name: 'Update',
				value: 'update',
				description: 'Update a resource',
				action: 'Update a resource',
			},
		],
		default: 'get',
	},
];

const baseFields: INodeProperties[] = [
	{
		displayName: 'Fields',
		name: 'fields',
		type: 'fixedCollection',
		default: {},
		description: 'Fields to include in the request',
		typeOptions: {
			multipleValues: true,
		},
		options: [
			{
				name: 'field',
				displayName: 'Field',
				values: [
					{
						displayName: 'Name',
						name: 'name',
						type: 'string',
						default: '',
						description: 'Field name',
					},
					{
						displayName: 'Value',
						name: 'value',
						type: 'string',
						default: '',
						description: 'Field value',
					},
				],
			},
		],
	},
];

const resourceSpecificFields: { [key: string]: INodeProperties[] } = {
	account: [
		{
			displayName: 'Name',
			name: 'name',
			type: 'string',
			default: '',
			required: true,
			displayOptions: {
				show: {
					resource: ['account'],
					operation: ['create', 'update'],
				},
			},
			description: 'Name of the account',
		},
	],
	device: [
		{
			displayName: 'Name',
			name: 'name',
			type: 'string',
			default: '',
			required: true,
			displayOptions: {
				show: {
					resource: ['device'],
					operation: ['create', 'update'],
				},
			},
			description: 'Name of the device',
		},
		{
			displayName: 'Type',
			name: 'type',
			type: 'options',
			default: 'sip',
			required: true,
			displayOptions: {
				show: {
					resource: ['device'],
					operation: ['create', 'update'],
				},
			},
			options: [
				{
					name: 'SIP',
					value: 'sip',
				},
				{
					name: 'WebRTC',
					value: 'webrtc',
				},
			],
			description: 'Type of the device',
		},
	],
	phoneNumber: [
		{
			displayName: 'Number',
			name: 'number',
			type: 'string',
			default: '',
			required: true,
			displayOptions: {
				show: {
					resource: ['phoneNumber'],
					operation: ['create', 'update'],
				},
			},
			description: 'Phone number',
		},
		{
			displayName: 'Type',
			name: 'type',
			type: 'options',
			default: 'local',
			required: true,
			displayOptions: {
				show: {
					resource: ['phoneNumber'],
					operation: ['create', 'update'],
				},
			},
			options: [
				{
					name: 'Local',
					value: 'local',
				},
				{
					name: 'Toll Free',
					value: 'tollFree',
				},
			],
			description: 'Type of phone number',
		},
	],
	sipTrunk: [
		{
			displayName: 'Name',
			name: 'name',
			type: 'string',
			default: '',
			required: true,
			displayOptions: {
				show: {
					resource: ['sipTrunk'],
					operation: ['create', 'update'],
				},
			},
			description: 'Name of the SIP trunk',
		},
		{
			displayName: 'Host',
			name: 'host',
			type: 'string',
			default: '',
			required: true,
			displayOptions: {
				show: {
					resource: ['sipTrunk'],
					operation: ['create', 'update'],
				},
			},
			description: 'Host of the SIP trunk',
		},
	],
	user: [
		{
			displayName: 'Username',
			name: 'username',
			type: 'string',
			default: '',
			required: true,
			displayOptions: {
				show: {
					resource: ['user'],
					operation: ['create', 'update'],
				},
			},
			description: 'Username of the user',
		},
		{
			displayName: 'Email',
			name: 'email',
			type: 'string',
			placeholder: 'name@email.com',
			default: '',
			required: true,
			displayOptions: {
				show: {
					resource: ['user'],
					operation: ['create', 'update'],
				},
			},
			description: 'Email of the user',
		},
	],
	tenant: [
		{
			displayName: 'Name',
			name: 'name',
			type: 'string',
			default: '',
			required: true,
			displayOptions: {
				show: {
					resource: ['tenant'],
					operation: ['create', 'update'],
				},
			},
			description: 'Name of the tenant',
		},
	],
};

export const resourceFields: INodeProperties[] = [
	...baseFields,
	...Object.values(resourceSpecificFields).flat(),
];
