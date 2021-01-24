exports.FirebaseDAL = class {
	/**
   * Method to query data from a Firestore collection
   *
   * @remarks
   * This method is part of the {@link FirebaseCoreService}.
   *
   * @param path `string` Path to the Collection id
   * @param conditionSign? `string` String with the conditional operator (for example: '==', '>=', etc)
   * @param valueEvaluated? `string` String of the key to be evaluated
   * @param condition? `string` String with the value for comparison
   * @param firestore `admin.firestore.Firestore` Instancia de Firestore de la app firebase-admin
   * @returns `Promise<any>`
   *
   */
	async queryFormCollectionWithoutLimit(
		path, conditionSign, valueEvaluated, condition, firestore) {
		try {
			const snapshot = await firestore.collection(path)
				.where(valueEvaluated, conditionSign, condition).get();
			return Promise.resolve(snapshot);
		} catch (error) {
			console.error(error);
			return Promise.reject(error);
		}
	}
};