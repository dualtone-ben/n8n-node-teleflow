import { IExecuteFunctions } from 'n8n-core';
import {
	INodeExecutionData,
	INodeType,
	INodeTypeDescription,
} from 'n8n-workflow';
import { resourceOperations, resourceFields } from './ResourceDescription';

export class TeleFlow implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'TeleFlow',
		name: 'teleFlow',
		icon: 'file:teleflow.svg',
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'Interact with TeleFlow API',
		defaults: {
			name: 'TeleFlow',
		},
		inputs: ['main'],
		outputs: ['main'],
		credentials: [
			{
				name: 'teleFlowApi',
				required: true,
			},
		],
		requestDefaults: {
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
			},
		},
		properties: [
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
				options: [
					{
						name: 'Account',
						value: 'account',
					},
					{
						name: 'Account Audit',
						value: 'accountAudit',
					},
					{
						name: 'Billing Entry',
						value: 'billingEntry',
					},
					{
						name: 'Call Detail Record',
						value: 'callDetailRecord',
					},
					{
						name: 'Carrier',
						value: 'carrier',
					},
					{
						name: 'Device',
						value: 'device',
					},
					{
						name: 'Device Template',
						value: 'deviceTemplate',
					},
					{
						name: 'Email Template',
						value: 'emailTemplate',
					},
					{
						name: 'Feature Code',
						value: 'featureCode',
					},
					{
						name: 'File',
						value: 'file',
					},
					{
						name: 'Flow',
						value: 'flow',
					},
					{
						name: 'Flow Template',
						value: 'flowTemplate',
					},
					{
						name: 'LCR',
						value: 'lcr',
					},
					{
						name: 'Mobile SIM',
						value: 'mobileSim',
					},
					{
						name: 'Number Port',
						value: 'numberPort',
					},
					{
						name: 'Phone Number',
						value: 'phoneNumber',
					},
					{
						name: 'Provision',
						value: 'provision',
					},
					{
						name: 'Report',
						value: 'report',
					},
					{
						name: 'Reseller',
						value: 'reseller',
					},
					{
						name: 'SIP Trunk',
						value: 'sipTrunk',
					},
					{
						name: 'Tariff',
						value: 'tariff',
					},
					{
						name: 'Tariff Code',
						value: 'tariffCode',
					},
					{
						name: 'Tariff Profile',
						value: 'tariffProfile',
					},
					{
						name: 'Tenant',
						value: 'tenant',
					},
					{
						name: 'Tenant Audit',
						value: 'tenantAudit',
					},
					{
						name: 'Transcription',
						value: 'transcription',
					},
					{
						name: 'User',
						value: 'user',
					},
					{
						name: 'Voice',
						value: 'voice',
					},
					{
						name: 'Voice Mail Message',
						value: 'voiceMailMessage',
					},
				],
				default: 'account',
			},
			...resourceOperations,
			...resourceFields,
		],
	};

	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		const items = this.getInputData();
		const returnData: INodeExecutionData[] = [];
		const resource = this.getNodeParameter('resource', 0) as string;
		const operation = this.getNodeParameter('operation', 0) as string;
		const credentials = await this.getCredentials('teleFlowApi');
		const baseUrl = credentials.baseUrl as string;

		for (let i = 0; i < items.length; i++) {
			try {
				if (resource === 'account') {
					if (operation === 'create') {
						const name = this.getNodeParameter('name', i) as string;
						const response = await this.helpers.request({
							method: 'POST',
							url: `${baseUrl}/accounts`,
							body: { name },
						});
						returnData.push({ json: response });
					}
					if (operation === 'get') {
						const accountId = this.getNodeParameter('id', i) as string;
						const response = await this.helpers.request({
							method: 'GET',
							url: `${baseUrl}/accounts/${accountId}`,
						});
						returnData.push({ json: response });
					}
					if (operation === 'getAll') {
						const response = await this.helpers.request({
							method: 'GET',
							url: `${baseUrl}/accounts`,
						});
						returnData.push({ json: response });
					}
					if (operation === 'update') {
						const accountId = this.getNodeParameter('id', i) as string;
						const name = this.getNodeParameter('name', i) as string;
						const response = await this.helpers.request({
							method: 'PUT',
							url: `${baseUrl}/accounts/${accountId}`,
							body: { name },
						});
						returnData.push({ json: response });
					}
					if (operation === 'delete') {
						const accountId = this.getNodeParameter('id', i) as string;
						const response = await this.helpers.request({
							method: 'DELETE',
							url: `${baseUrl}/accounts/${accountId}`,
						});
						returnData.push({ json: response });
					}
				}
			} catch (error) {
				if (this.continueOnFail()) {
					returnData.push({ json: { error: error.message } });
					continue;
				}
				throw error;
			}
		}

		return [returnData];
	}
}
