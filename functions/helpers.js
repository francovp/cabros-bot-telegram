/**
 * Función para parsear un dato de fecha en varios formatos y convertirlo a un objeto de tipo Date de Javascript
 * @param date {any}
 * @returns {Date} un objeto de tipo Date de Javascript
 */
exports.parseDate = (date) => {
	// is Milliseconds
	if (Number.isInteger(date)) {
		// The 0 there is the key, which sets the date to the epoch
		const d = new Date(0);
		d.setUTCSeconds(date);
		return d;
	} else {
		const utc = Date.parse(date);
		// is Javascript Date object
		if (isNaN(utc)) {
			return date.toDate();
		} else {
			// is string Date
			return new Date(date);
		}
	}
};

/**
 * Función para convertir un objeto de tipo Date de Javascript en un dato de tipo unix epoch (UTC)
 * @param date
 * @returns {number} Un dato de fecha UTC como número
 */
exports.parseDateToUTC = (date) => {
	return Date.UTC(
		date.getFullYear(),
		date.getMonth(),
		date.getDate(),
		date.getHours(),
		date.getMinutes(),
		date.getSeconds(),
		date.getMilliseconds());
};