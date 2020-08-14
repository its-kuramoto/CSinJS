const styleProxy = {
  // proxyにはtrapと呼ばれるset,getなどのメソッドが存在する。
  // trapはオブジェクトのプロパティに何か変更があった際に呼ばれるメソッド
  // objectはProxyの第一引数, propertyはpropertyにアクセスされた際のプロパティの名前が渡ってくる。
  get: (object, property) => {
    // 関数を返すことで、メソッドチェーンを実現
    return (value) => {
      // valueが指定されていれば、setの役割を果たす。
      if (value) {
        object[property] = value;
        // 再帰的に呼ぶことで、複数のメソッドチェーンに対応
        return new Proxy(object, styleProxy);
      }
      // valueが指定されていなければ、getの役割を果たす。
      return object[property];
    }
  }
}

// 指定された要素を取得して、その要素のstyleを監視対象としたproxyを返す。
const style = (selector) => {
  const element = document.querySelector(selector);

  return new Proxy(element.style, styleProxy);
}

// proxyのプロパティにアクセスして、getを呼び出す。
style(".id").color("red");