N.Page.Supplier = new (function () {
  var Ed = {
    Addbtn: "#databtn",
    suppliermodel: "#supplier_modal",
  };
  var init = function () {
    $(Ed.Addbtn).on("click", supplermodal);
    $(Ed.btnAddUp).on("click", addData);
  };
    var supplermodal = () => {
      UIkit.modal(Ed.suppliermodel).show();
    };
    var addData = () => {
      var Supplier = document.getElementById("usupplier").value;
      var Address = document.getElementById("raddress").value;
      var Phone = document.getElementById("rphone").value;
      var Services = document.getElementById("rservices").value;
      append(Supplier, Address, Phone, Services);
    };
    var append = (Supplier, Address, Phone, Services) => {
      var row =
        '<tr><td class="uk-width-1-5 uk-text-center">' +
        Supplier +
        '</td><td class="uk-width-1-5 uk-text-center" >' +
        Address +
        '</td><td class="uk-width-1-5 uk-text-center">' +
        Phone +
        '</td><td class="uk-width-1-5 uk-text-center">' +
        Services +
        "</td></tr>";
    };

  return {
    init: init,
  };
})();
// window.onload = function () {
//   N.Page.Supplier.init();
// };
