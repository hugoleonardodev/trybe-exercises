document.querySelector('mutation-test-report-app').report = {"files":{"/home/hugo-dev/trybe-exercises/front-end-development/block_15/exercise-digimon-finders/src/App.js":{"language":"javascript","mutants":[{"id":"0","location":{"end":{"column":76,"line":8},"start":{"column":18,"line":8}},"mutatorName":"ObjectLiteral","replacement":"{}","status":"Ignored","description":"Ignore reason: Ignored because of excluded mutation \"ObjectLiteral\""},{"id":"6","location":{"end":{"column":6,"line":15},"start":{"column":31,"line":12}},"mutatorName":"ObjectLiteral","replacement":"{}","status":"Ignored","description":"Ignore reason: Ignored because of excluded mutation \"ObjectLiteral\""},{"id":"15","location":{"end":{"column":10,"line":28},"start":{"column":54,"line":23}},"mutatorName":"ObjectLiteral","replacement":"{}","status":"Ignored","description":"Ignore reason: Ignored because of excluded mutation \"ObjectLiteral\""},{"id":"1","location":{"end":{"column":37,"line":8},"start":{"column":35,"line":8}},"mutatorName":"StringLiteral","replacement":"\"Stryker was here!\"","status":"Survived"},{"id":"2","location":{"end":{"column":56,"line":8},"start":{"column":51,"line":8}},"mutatorName":"BooleanLiteral","replacement":"true","status":"Killed","description":"Killed by: Teste da aplicação toda renders App"},{"id":"3","location":{"end":{"column":74,"line":8},"start":{"column":72,"line":8}},"mutatorName":"StringLiteral","replacement":"\"Stryker was here!\"","status":"Killed","description":"Killed by: Teste da aplicação toda renders App"},{"id":"4","location":{"end":{"column":4,"line":16},"start":{"column":27,"line":11}},"mutatorName":"BlockStatement","replacement":"{}","status":"Survived"},{"id":"5","location":{"end":{"column":7,"line":15},"start":{"column":19,"line":12}},"mutatorName":"ArrowFunction","replacement":"() => undefined","status":"Survived"},{"id":"7","location":{"end":{"column":4,"line":30},"start":{"column":32,"line":18}},"mutatorName":"BlockStatement","replacement":"{}","status":"Survived"},{"id":"8","location":{"end":{"column":22,"line":20},"start":{"column":9,"line":20}},"mutatorName":"ConditionalExpression","replacement":"true","status":"Survived"},{"id":"9","location":{"end":{"column":22,"line":20},"start":{"column":9,"line":20}},"mutatorName":"ConditionalExpression","replacement":"false","status":"Survived"},{"id":"10","location":{"end":{"column":6,"line":29},"start":{"column":24,"line":20}},"mutatorName":"BlockStatement","replacement":"{}","status":"Survived"},{"id":"11","location":{"end":{"column":79,"line":21},"start":{"column":13,"line":21}},"mutatorName":"StringLiteral","replacement":"``","status":"Survived"},{"id":"12","location":{"end":{"column":34,"line":22},"start":{"column":15,"line":22}},"mutatorName":"ArrowFunction","replacement":"() => undefined","status":"Survived"},{"id":"13","location":{"end":{"column":12,"line":28},"start":{"column":15,"line":23}},"mutatorName":"ArrowFunction","replacement":"() => undefined","status":"Survived"},{"id":"14","location":{"end":{"column":11,"line":28},"start":{"column":42,"line":23}},"mutatorName":"ArrowFunction","replacement":"() => undefined","status":"Survived"},{"id":"16","location":{"end":{"column":43,"line":26},"start":{"column":33,"line":26}},"mutatorName":"StringLiteral","replacement":"\"\"","status":"Survived"},{"id":"17","location":{"end":{"column":27,"line":27},"start":{"column":23,"line":27}},"mutatorName":"BooleanLiteral","replacement":"false","status":"Survived"},{"id":"18","location":{"end":{"column":4,"line":55},"start":{"column":12,"line":32}},"mutatorName":"BlockStatement","replacement":"{}","status":"Killed","description":"Killed by: Teste da aplicação toda renders App"},{"id":"19","location":{"end":{"column":66,"line":39},"start":{"column":21,"line":39}},"mutatorName":"ArrowFunction","replacement":"() => undefined","status":"Survived"},{"id":"20","location":{"end":{"column":38,"line":49},"start":{"column":11,"line":49}},"mutatorName":"ConditionalExpression","replacement":"true","status":"Killed","description":"Killed by: Teste da aplicação toda renders App"},{"id":"21","location":{"end":{"column":38,"line":49},"start":{"column":11,"line":49}},"mutatorName":"ConditionalExpression","replacement":"false","status":"Survived"},{"id":"22","location":{"end":{"column":38,"line":49},"start":{"column":11,"line":49}},"mutatorName":"LogicalOperator","replacement":"isFetching || !errorMessage","status":"Killed","description":"Killed by: Teste da aplicação toda renders App"},{"id":"23","location":{"end":{"column":38,"line":49},"start":{"column":25,"line":49}},"mutatorName":"BooleanLiteral","replacement":"errorMessage","status":"Survived"},{"id":"24","location":{"end":{"column":53,"line":51},"start":{"column":18,"line":51}},"mutatorName":"ConditionalExpression","replacement":"true","status":"Killed","description":"Killed by: Teste da aplicação toda renders App"},{"id":"25","location":{"end":{"column":53,"line":51},"start":{"column":18,"line":51}},"mutatorName":"ConditionalExpression","replacement":"false","status":"Killed","description":"Killed by: Teste da aplicação toda renders App"},{"id":"26","location":{"end":{"column":53,"line":51},"start":{"column":18,"line":51}},"mutatorName":"LogicalOperator","replacement":"errorMessage && 'Faça uma pesquisa'","status":"Killed","description":"Killed by: Teste da aplicação toda renders App"},{"id":"27","location":{"end":{"column":53,"line":51},"start":{"column":34,"line":51}},"mutatorName":"StringLiteral","replacement":"\"\"","status":"Killed","description":"Killed by: Teste da aplicação toda renders App"}],"source":"import React from 'react';\nimport './App.css';\nimport Digimon from './Digimon';\n\nclass App extends React.Component {\n  constructor() {\n    super();\n    this.state = { searchDigimon: '', isFetching: false, errorMessage: '' };\n  }\n\n  inputValue = (value) => {\n    this.setState((state) => ({\n      ...state,\n      searchDigimon: value,\n    }));\n  }\n\n  requestDigimon = async () => {\n    const { searchDigimon } = this.state;\n    if (searchDigimon) {\n      fetch(`https://digimon-api.vercel.app/api/digimon/name/${searchDigimon}`)\n        .then((res) => res.json())\n        .then((results) => this.setState((state) => ({\n          ...state,\n          digimon: results[0],\n          errorMessage: results[\"ErrorMsg\"],\n          isFetching: true,\n        })));\n    }\n  }\n\n  render() {\n    const { digimon, searchDigimon, isFetching, errorMessage } = this.state;\n    return (\n      <div className=\"App\">\n        <input\n          value={searchDigimon}\n          type=\"text\"\n          onChange={({ target }) => this.inputValue(target.value)}\n          data-testid=\"input\"\n        />\n        <button\n          data-testid=\"buttonSearch\"\n          onClick={this.requestDigimon}\n          type=\"button\"\n        >\n          Search Digimon\n        </button>\n        { isFetching && !errorMessage\n          ? <Digimon digimon={digimon} />\n          : <h1>{errorMessage || 'Faça uma pesquisa'}</h1>\n        }\n      </div>\n    );\n  }\n}\n\nexport default App;\n"}},"schemaVersion":"1.0","thresholds":{"high":80,"low":60,"break":null}};