import SlimSelect from 'slim-select'

export const ddlClientInitialise = () => {
	const slimSelectArray = document.querySelectorAll('.ddlClientID')
	slimSelectArray.forEach((element: HTMLSelectElement) => {
		if (element.dataset.ssid === undefined && element.localName === 'select') {
			const select = new SlimSelect({
				select: element,
				afterClose: function () {
					contactLoad(element.value)
				}
			})
		}
	})
}
export const ddlClientContactInitialise = () => {
	const slimSelectArray = document.querySelectorAll('.ddlClientContactID')
	slimSelectArray.forEach((element: HTMLSelectElement) => {
		if (element.dataset.ssid === undefined && element.localName === 'select') {
			new SlimSelect({
				select: element,
				afterClose: function () {
					PopulateContactAddresses(element.value)
				}
			})
		}
	})
}
export const ddlLogTypeInitialise = () => {
	const slimSelectArray = document.querySelectorAll('.ddlLogContactTypeID')
	slimSelectArray.forEach((element: HTMLSelectElement) => {
		if (element.dataset.ssid === undefined && element.localName === 'select') {
			new SlimSelect({
				select: element
			})
		}
	})
}
export const ddlGenericInitialise = () => {
	const slimSelectArray = document.querySelectorAll('.ddlGeneric')
	slimSelectArray.forEach((element: HTMLSelectElement) => {
		if (element.dataset.ssid === undefined && element.localName === 'select') {
			new SlimSelect({
				select: element
			})
		}
	})
}
const PopulateContacts = (value: number) => {
	const ddlClientContactID = document.querySelector('.ddlClientContactID') as HTMLSelectElement
	if (ddlClientContactID != null) {
		const selected: string = getSelected(ddlClientContactID)
		ddlClientContactID.innerHTML = ''
		const hidGetClientContacts = document.getElementById('hidGetClientContacts') as HTMLFormElement
		fetch(hidGetClientContacts.value.toString() +
		'?id=' + encodeURIComponent(value),
		{
			method: 'POST'
		})
			.then((response) => {
				return response.json()
			})
			.then(function (result) {
				result.forEach((elem: any) => {
					createOption(elem, selected, ddlClientContactID)
				})
			})
			.catch((ex) => {
				alert('Failed to retrieve contacts.' + ex)
			})
	}
}
const PopulateContactAddresses = (value: string) => {
	const ddlClientAddressID = document.getElementById('ddlClientAddressID') as HTMLSelectElement
	const selected: string = getSelected(ddlClientAddressID)
	if (ddlClientAddressID != null) {
		ddlClientAddressID.innerHTML = ''
	}
	let ContactID
	if (value != null) {
		if (value.toString() === '0') {
			ContactID = 0
		} else {
			ContactID = parseInt(value)
		}
	}
	const hidGetClientContactsAddresses = document.getElementById('hidGetClientContactsAddresses') as HTMLFormElement
	fetch(hidGetClientContactsAddresses.value.toString() +
		'?id=' + encodeURIComponent(ContactID),
	{
		method: 'POST'
	})
		.then((response) => {
			return response.json()
		})
		.then(function (result) {
			result.forEach((elem: any) => {
				createOption(elem, selected, ddlClientAddressID)
			})
		})
		.catch((ex) => {
			alert('Failed to retrieve addresses.' + ex)
		})
	setTimeout(function () {
		ddlGenericInitialise()
	}, 250)
}
const contactLoad = (value: string) => {
	PopulateContacts(parseInt(value))
}
const createOption = (elem: any, selected: string, ddl: HTMLSelectElement) => {
	const opt = document.createElement('option')
	opt.value = elem.Value
	opt.innerHTML = elem.Text
	if (selected === elem.Value) {
		opt.selected = true
	}
	ddl.appendChild(opt)
}
const getSelected = (ddl: HTMLSelectElement) => {
	let selected: string = null
	Array.from(ddl.options).forEach(element => {
		if (element.selected) {
			selected = element.value
		}
	})
	return selected
}
