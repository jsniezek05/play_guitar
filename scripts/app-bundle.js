define('app',['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var App = exports.App = function App() {
    _classCallCheck(this, App);

    this.message = 'Hello World!';
  };
});
define('environment',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    debug: true,
    testing: true
  };
});
define('main',['exports', './environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;

  var _environment2 = _interopRequireDefault(_environment);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  Promise.config({
    longStackTraces: _environment2.default.debug,
    warnings: {
      wForgottenReturn: false
    }
  });

  function configure(aurelia) {
    aurelia.use.standardConfiguration().feature('resources');

    if (_environment2.default.debug) {
      aurelia.use.developmentLogging();
    }

    if (_environment2.default.testing) {
      aurelia.use.plugin('aurelia-testing');
    }

    aurelia.start().then(function () {
      return aurelia.setRoot();
    });
  }
});
define('resources/index',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;
  function configure(config) {}
});
define('resources/elements/sidenav',['exports', 'aurelia-framework'], function (exports, _aureliaFramework) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Sidenav = undefined;

  function _initDefineProp(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
      enumerable: descriptor.enumerable,
      configurable: descriptor.configurable,
      writable: descriptor.writable,
      value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
      desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
      desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
      return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
      desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
      desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
      Object['define' + 'Property'](target, property, desc);
      desc = null;
    }

    return desc;
  }

  function _initializerWarningHelper(descriptor, context) {
    throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
  }

  var _desc, _value, _class, _descriptor;

  var Sidenav = exports.Sidenav = (_class = function () {
    function Sidenav() {
      _classCallCheck(this, Sidenav);

      _initDefineProp(this, 'value', _descriptor, this);
    }

    Sidenav.prototype.valueChanged = function valueChanged(newValue, oldValue) {};

    return Sidenav;
  }(), (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'value', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: null
  })), _class);
});
define('resources/elements/topnav',['exports', 'aurelia-framework'], function (exports, _aureliaFramework) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Topnav = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var Topnav = exports.Topnav = function Topnav() {
    _classCallCheck(this, Topnav);
  };
});
define('text!app.html', ['module'], function(module) { module.exports = "<template>\n  <require from=\"./resources/elements/topnav\"></require>\n  <topnav></topnav>\n</template>\n"; });
define('text!resources/elements/sidenav.html', ['module'], function(module) { module.exports = "<template>\n  <h1>${value}</h1>\n</template>"; });
define('text!resources/elements/topnav.html', ['module'], function(module) { module.exports = "<template>\n  <require from=\"./topnav.css\"></require>\n  <div class=\"topnav\">\n    <div class=\"navbar\">\n      <div class=\"logo\">GuitarTab</div>\n    </div>\n    <div class=\"viewbar\">\n      <div class=\"img\"><img src=\"https://www.taylorguitars.com/sites/default/files/styles/multi_column_guitar_three/public/responsive-guitar-detail/Taylor-214ce-SB-DLX-fr-2014.png?itok=h5-4e-YW\"></div>\n      <div class=\"img\"></div>\n      <div class=\"img\"></div>\n    </div>\n  </div>\n</template>"; });
define('text!resources/elements/topnav.css', ['module'], function(module) { module.exports = ".topnav {\n  vertical-align: middle;\n}\n.topnav .navbar {\n  display: flex;\n  width: 100%;\n  height: 45px;\n  background-color: #151515;\n  color: #a9a9a9;\n  align-items: center;\n  margin-bottom: 1px;\n}\n.topnav .navbar .logo {\n  display: flex;\n  justify-content: center;\n  text-align: center;\n  width: 115px;\n  font-family: Helvetica sans-serif;\n  font-size: 20px;\n}\n.topnav .navbar .logo:hover {\n  cursor: default;\n  opacity: 0.8;\n}\n.topnav .viewbar {\n  height: 250px;\n  width: 100%;\n  background-color: #151515;\n  justify-content: space-around;\n  align-items: center;\n  display: inline-flex;\n  justify-self: center;\n}\n.topnav .viewbar .img {\n  display: flex;\n  height: 225px;\n  width: 30%;\n  border: #808080 solid 1px;\n  justify-content: center;\n}\n.topnav .viewbar .img:hover {\n  opacity: 0.8;\n}\n.topnav .viewbar .img img {\n  height: 200px;\n  width: 90%;\n}\n"; });
//# sourceMappingURL=app-bundle.js.map