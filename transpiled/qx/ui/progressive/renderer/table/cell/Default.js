(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Class": {
        "usage": "dynamic",
        "require": true
      },
      "qx.ui.progressive.renderer.table.cell.Abstract": {
        "construct": true,
        "require": true
      },
      "qx.bom.String": {},
      "qx.ui.progressive.renderer.table.Row": {},
      "qx.util.format.NumberFormat": {},
      "qx.util.format.DateFormat": {}
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);

  /* ************************************************************************
  
     qooxdoo - the new era of web development
  
     http://qooxdoo.org
  
     Copyright:
       2008 Derrell Lipman
  
     License:
       MIT: https://opensource.org/licenses/MIT
       See the LICENSE file in the project's top-level directory for details.
  
     Authors:
       * Derrell Lipman (derrell)
  
  ************************************************************************ */

  /**
   * Table Cell Renderer for Progressive.
   */
  qx.Class.define("qx.ui.progressive.renderer.table.cell.Default", {
    extend: qx.ui.progressive.renderer.table.cell.Abstract,

    /**
     */
    construct: function construct() {
      qx.ui.progressive.renderer.table.cell.Abstract.constructor.call(this);
    },
    members: {
      // overridden
      _getContentHtml: function _getContentHtml(cellInfo) {
        return qx.bom.String.escape(this._formatValue(cellInfo.cellData));
      },

      /**
       * Formats a value in a reasonably predictable fashion.
       *
       *
       * @param value {var}
       *   The value to be formatted
       *
       * @return {String}
       * <ul>
       *   <li>
       *     Numbers are formatted with two fractional digits.
       *   </li>
       *   <li>
       *     Dates are formatted in the default format of
       *     {@link qx.util.format.DateFormat}.
       *   </li>
       *   <li>
       *     Any type not otherwise handled, including String values, are
       *     simply returned unaltered.
       *   </li>
       * </ul>
       */
      _formatValue: function _formatValue(value) {
        var ret;

        if (value == null) {
          return "";
        }

        if (typeof value == "string") {
          return value;
        } else if (typeof value == "number") {
          if (!qx.ui.progressive.renderer.table.Row._numberFormat) {
            var numberFormat = new qx.util.format.NumberFormat();
            numberFormat.setMaximumFractionDigits(2);
            qx.ui.progressive.renderer.table.Row._numberFormat = numberFormat;
          }

          ret = qx.ui.progressive.renderer.table.Row._numberFormat.format(value);
        } else if (value instanceof Date) {
          ret = qx.util.format.DateFormat.getDateInstance().format(value);
        } else {
          ret = value;
        }

        return ret;
      }
    }
  });
  qx.ui.progressive.renderer.table.cell.Default.$$dbClassInfo = $$dbClassInfo;
})();

//# sourceMappingURL=Default.js.map?dt=1592642675790