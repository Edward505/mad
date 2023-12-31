import { settings } from '../../../settings/server';
import { retrieveRegistrationStatus } from './retrieveRegistrationStatus';

export async function getWorkspaceKey() {
	const { connectToCloud, workspaceRegistered } = await retrieveRegistrationStatus();

	if (!connectToCloud || !workspaceRegistered) {
		return false;
	}

	const publicKey = settings.get<string>('Cloud_Workspace_PublicKey');

	if (!publicKey) {
		return false;
	}

	return publicKey;
}
