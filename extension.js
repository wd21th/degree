const vscode = require('vscode');
/**
* @param {vscode.ExtensionContext} context
*/
function activate(context) {
	
	let disposable = vscode.commands.registerCommand('degree.expandNumber', async function () {
		let editor = vscode.window.activeTextEditor;
		
		if (editor) {
			let document = editor.document;
			await vscode.commands.executeCommand('cursorLeftSelect')
			let selection = editor.selection;
			let input = document.getText(selection);
			let bool = true
			
			while (bool) {
				if(!input.match(/\s/g)) {
					try {
						await vscode.commands.executeCommand('cursorLeftSelect')
						selection = editor.selection;
						if (input == document.getText(selection)) {
							bool = false	
						}
						input = document.getText(selection)
					} catch (e) {
						bool = false
					}
				}else {
					bool = false
				}
				
			}
			input = input.trim()
			let output = ''
			
			if (input.match(/(?<=)(.+?)(?=[a-zA-Z])/) && input.match(/\d+/g)) {
				let num = +input.match(/(.+?)(?=[a-zA-Z])/)[0]
				const degree = input.replace(num,'')
				switch (degree) {
					case 'p':
					// var multiplication = 1e-12
					var zeros = '';
					num = num.toString()
					
					for (let i = num.length - 1; i > -1; i--)  {
						if (num[i].match(/0/g))
						{num = num.substring(0,num.length - 1) ; zeros+='0';} else break;
					}
					if (zeros.length != 0) {
						var tens = '1'+zeros
						
						var factor = 'e'+(+(tens.length-1)-12)
						
						output = num+factor
						
						var part1 = Math.round(output.replace(/e.+/, ''))
						var part2 = output.match(/e.+/g)[0]
						output = part1+part2
						
					}else {
						num = +num
						
						if (num.toExponential().match(/(?<=e)(.+)/g)) {
							var factor = num.toExponential().match(/(?<=e)(.+)/g)[0] 
							num = num.toExponential().replace(/e.+/g, '')
							output += num+'e'+(-12 + (+factor)) 
							
						}
					}
					
					
					
					break;
					case 'n':
					var multiplication = 1e-9
					
					var zeros = '';
					num = num.toString()
					
					for (let i = num.length - 1; i > -1; i--)  {
						if (num[i].match(/0/g))
						{num = num.substring(0,num.length - 1) ; zeros+='0';} else break;
					}
					
					if (zeros.length != 0) {
						var tens = '1'+zeros
						var factor = 'e'+(+(tens.length-1)-9)
						
						output = num+factor
						
						
						var part1 = Math.round(output.replace(/e.+/, ''))
						var part2 = output.match(/e.+/g)[0]
						
						output = part1+part2
						
						
					} else {
						num = +num
						
						if (num.toExponential().match(/(?<=e)(.+)/g)) {
							var factor = num.toExponential().match(/(?<=e)(.+)/g)[0]
							num = num.toExponential().replace(/e.+/g, '')
							output += num+'e'+(-9 + (+factor))
							
						}
					}
					
					break;
					case 'mc':
					
					var zeros = '';
					num = num.toString()
					
					for (let i = num.length - 1; i > -1; i--)  {
						if (num[i].match(/0/g))
						{num = num.substring(0,num.length - 1) ; zeros+='0';} else break;
					}
					
					if (zeros.length != 0) {
						var tens = '1'+zeros
						
						// multiplication = Math.round(multiplication)
						
						
						var factor = 'e'+(+(tens.length-1)-6)
						
						output = num+factor
						
						var part1 = Math.round(output.replace(/e.+/, ''))
						var part2 = output.match(/e.+/g)[0]
						
						
						output = part1+part2
						
					} else {
						num = +num
						
						if (num.toExponential().match(/(?<=e)(.+)/g)) {
							var factor = num.toExponential().match(/(?<=e)(.+)/g)[0] 
							num = num.toExponential().replace(/e.+/g, '')
							output += num+'e'+(-6 + (+factor)) 
							
						}
					}
					break;
					case 'm':
					
					var zeros = '';
					num = num.toString()
					
					for (let i = num.length - 1; i > -1; i--)  {
						if (num[i].match(/0/g))
						{num = num.substring(0,num.length - 1) ; zeros+='0';} else break;
					}
					
					if (zeros.length != 0) {
						var tens = '1'+zeros
						
						var factor = 'e'+(+(tens.length-1)-3)
						
						
						output = num+factor
						
						var part1 = Math.round(output.replace(/e.+/, ''))
						var part2 = output.match(/e.+/g)[0]
						
						
						
						output = part1+part2
						
					} else {
						num = +num
						
						if (num.toExponential().match(/(?<=e)(.+)/g)) {
							var factor = num.toExponential().match(/(?<=e)(.+)/g)[0] 
							num = num.toExponential().replace(/e.+/g, '')
							output += num+'e'+(-3 + (+factor)) 
							
						}
					}
					
					
					
					
					
					
					break;
					case 'c':
					
					
					var zeros = '';
					num = num.toString()
					
					for (let i = num.length - 1; i > -1; i--)  {
						if (num[i].match(/0/g))
						{num = num.substring(0,num.length - 1) ; zeros+='0';} else break;
					}
					
					if (zeros.length != 0) {
						var tens = '1'+zeros
						
						
						var factor = 'e'+(+(tens.length-1)-2)
						
						
						output = num+factor
						
						var part1 = Math.round(output.replace(/e.+/, ''))
						var part2 = output.match(/e.+/g)[0]
						
						
						output = part1+part2
						
						
						
					} else {
						num = +num
						
						if (num.toExponential().match(/(?<=e)(.+)/g)) {
							var factor = num.toExponential().match(/(?<=e)(.+)/g)[0] 
							num = num.toExponential().replace(/e.+/g, '')
							output += num+'e'+(-2 + (+factor)) 
							
						}
					}
					
					
					
					
					
					break;
					
					case 'k':
					
					var zeros = '';
					num = num.toString()
					
					for (let i = num.length - 1; i > -1; i--)  {
						if (num[i].match(/0/g))
						{num = num.substring(0,num.length - 1) ; zeros+='0';} else break;
					}
					
					if (zeros.length != 0) {
						var tens = '1'+zeros
						
						
						var factor = 'e'+(+(tens.length-1)+3)
						
						
						
						output = num+factor
						
						
						var part1 = Math.round(output.replace(/e.+/, ''))
						var part2 = output.match(/e.+/g)[0]
						
						
						
						output = part1+part2
						
					} else {
						num = +num
						
						if (num.toExponential().match(/(?<=e)(.+)/g)) {
							var factor = num.toExponential().match(/(?<=e)(.+)/g)[0] 
							num = num.toExponential().replace(/e.+/g, '')
							output += num+'e'+(3 + (+factor)) 
							
						}
					}
					break;
					case 'M':
					
					
					var zeros = '';
					num = num.toString()
					
					for (let i = num.length - 1; i > -1; i--)  {
						if (num[i].match(/0/g))
						{num = num.substring(0,num.length - 1) ; zeros+='0';} else break;
					}
					
					if (zeros.length != 0) {
						var tens = '1'+zeros
						
						
						var factor = 'e'+(+(tens.length-1)+6)
						
						
						output = num+factor
						
						
						var part1 = Math.round(output.replace(/e.+/, ''))
						var part2 = output.match(/e.+/g)[0]
						
						
						
						output = part1+part2
						
					} else {
						num = +num
						
						if (num.toExponential().match(/(?<=e)(.+)/g)) {
							var factor = num.toExponential().match(/(?<=e)(.+)/g)[0] 
							num = num.toExponential().replace(/e.+/g, '')
							output += num+'e'+(6 + (+factor)) 
							
						}
					}
					
					
					
					
					break;
					case 'G':
					
					var zeros = '';
					num = num.toString()
					
					for (let i = num.length - 1; i > -1; i--)  {
						if (num[i].match(/0/g))
						{num = num.substring(0,num.length - 1) ; zeros+='0';} else break;
					}
					
					if (zeros.length != 0) {
						var tens = '1'+zeros
						
						var factor = 'e'+(+(tens.length-1)+9)
						
						output = num+factor
						
						var part1 = Math.round(output.replace(/e.+/, ''))
						var part2 = output.match(/e.+/g)[0]
						
						output = part1+part2
						
					} else {
						num = +num
						
						if (num.toExponential().match(/(?<=e)(.+)/g)) {
							var factor = num.toExponential().match(/(?<=e)(.+)/g)[0] 
							num = num.toExponential().replace(/e.+/g, '')
							output += num+'e'+(9 + (+factor)) 
						}
					}
					break;
					case 'T':
					
					
					
					var zeros = '';
					num = num.toString()
					
					for (let i = num.length - 1; i > -1; i--)  {
						if (num[i].match(/0/g))
						{num = num.substring(0,num.length - 1) ; zeros+='0';} else break;
					}
					
					if (zeros.length != 0) {
						var tens = '1'+zeros
						
						
						var factor = 'e'+(+(tens.length-1)+12)
						
						
						output = num+factor
						
						var part1 = Math.round(output.replace(/e.+/, ''))
						var part2 = output.match(/e.+/g)[0]
						
						
						output = part1+part2
						
					} else {
						num = +num
						
						if (num.toExponential().match(/(?<=e)(.+)/g)) {
							var factor = num.toExponential().match(/(?<=e)(.+)/g)[0] 
							num = num.toExponential().replace(/e.+/g, '')
							output += num+'e'+(12 + (+factor)) 
						}
					}
					
					
					break;
				}
			}else {
				switch (input) {
					
					case 'p':
					output += '1e-12'
					break;
					case 'n':
					output += '1e-9'
					break;
					case 'mc':
					output += '1e-6'
					
					break;
					case 'm':
					output += '1e-3'
					break;
					case 'c':
					output += '1e-2'
					
					break;
					
					case 'k':
					output += '1e3'
					break;
					case 'M':
					output += '1e6'
					
					break;
					case 'G':
					output += '1e9'
					
					break;
					case 'T':
					output += '1e12'
					break;
					
				}
			}
			
			
			function toDecimal(length) {
				var n = '1'
				for (let i = 0; i < length; i++) {
					n+='0'    
				}
				return n;
			}
			
			
			if (output.match(/^\d+\.\d+/g)) {
				
				
				let decimal = toDecimal(output.match(/^\d+\.\d+/g)[0].match(/(?<=\.)(.+)/g)[0].length)
				
				decimal = +decimal
				
				var factor1 = decimal.toExponential().replace('+','-').match(/(?<=e)(.+)(?=)/g)[0]
				
				var factor2 = output.match(/(?<=e)(.+)(?=)/g)[0]
				
				output = output.replace('.', '').replace(/e.+/g, '') + 'e' + ((+factor1) + (+factor2))
				
			}
			
			
			
			
			if (output.match(/e\d+/g)) {
				// Привожу в стандарт
				output = output.match(/(^\d+)/g)[0]+'e'+'+'+output.match(/(?<=e)(\d+)/g)[0]
			}
			
			output = output.replace( 'e+0' , '')
			
			editor.edit(editBuilder => {
				editBuilder.replace(selection, ' '+output);
			});
			await vscode.commands.executeCommand('cursorRight')
		}
	});
	
	
	let disposable2 = vscode.commands.registerCommand('degree.toExponential', async function() {
		
		let editor = vscode.window.activeTextEditor;
		
		if (editor) {
			
			const document = editor.document;
			const selection = editor.selection;
			
			let number = document.getText(selection);
			function toDecimal(length) {
				var n = '1'
				for (let i = 0; i < length; i++) {
					n+='0'    
				}
				return n;
			}
			
			number = +number
			
			if (Number.isInteger(number)) {
				number = number.toExponential()
				
				if (number.match(/e\d+/g)) {
					number = number.match(/(^\d+)/g)[0]+'e'+'+'+number.match(/(?<=e)(\d+)/g)[0]
				}
				
				number = number.replace( 'e+0' , '')
				
			}else {
				number = number.toString()
				var zeros = '';
				for (let i = number.length - 1; i > -1; i--)  {
					if (number[i].match(/0/g))
					{number = number.substring(0,number.length - 1) ; zeros+='0';} else break;
				}
				
				let a = toDecimal(number.match(/(?<=\.)(\d+)/)[0].length)
				
				a = +a
				
				/* console.log((number*a.toExponential())+a.toExponential().match(/(e.+)/)[0].replace('+','-')); */
				
				output = (number*a.toExponential())+a.toExponential().match(/(e.+)/)[0].replace('+','-')
			}
			
			editor.edit(editBuilder => {
				editBuilder.replace(selection, number);
			});
			
			
		}
		
		
		
		
	});
	
	context.subscriptions.push(disposable);
	context.subscriptions.push(disposable2);
}

function deactivate() {}

module.exports = {
	activate,
	deactivate
}
