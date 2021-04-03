N.Page.Product=new function(){
    var _containerIds={
        'Product':'#Product',
        'Brand':'#Brand',
        'Color':'#Color',
        'Navigation':'#Navigation'
    };

    var init=function(){
        var _parentContainerId="#Product";
        var _outerGrid='<div uk-grid name="grid"></div>';
         $(_parentContainerId).append(_outerGrid);
        var _grid=$(_parentContainerId).find('[ name="grid"]');
        var _products=arguments[0];
        _products.forEach(function(p){
            var _cardHtml=N.Page.Util.getCard(p.Id,p.Name,p.ImageUrl);
            _grid.append(_cardHtml);
            $(_parentContainerId).on('click','[name="'+p.Id+'"]',function(){
                //get colors associated with that product
                $(_containerIds.Product).addClass("uk-hidden");
                $(_containerIds.Brand).addClass("uk-hidden");
                $(_containerIds.Color).removeClass("uk-hidden");
                var colors=[{'Id':1,'Name':'Black','ImageUrl':'https://s3n.cashify.in/cashify/product/img/xhdpi/csh-qp4ba4sq-aeny.png'}];
                N.Page.Color.init(colors);
                $(_containerIds.Navigation).append('<a href="http://localhost:3000/home" class="uk-padding-remove-left">>Color</a>');
            });
        });

    }
    return {
        init:init
    };
};