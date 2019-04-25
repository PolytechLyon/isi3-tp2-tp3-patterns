import java.lang.String;
import java.lang.System;


class Beer {
  private Double price;
  private String brand;

  public Double getPrice() {
    return price;
  }

  public void setPrice(Double price) {
    this.price = price;
  }

  public String getBrand() {
    return brand;
  }

  public void setBrand(String brand) {
    this.brand = brand;
  }

  public Beer(String brand, Double price) {
    this.price = price;
    this.brand = brand;
  }
}

interface HappyHourStrategy {
  // à compléter
}

class NoDiscount implements HappyHourStrategy {
  // à compléter
}

class TenPercent implements HappyHourStrategy {
  // à compléter
}

class TwentyFivePercent implements HappyHourStrategy {
  // à compléter
}

class PubWaiter {
// à compléter
}


public class Main {
  public static void main(String[] args) {

    /* initialize strategy */
    HappyHourStrategy noDiscount = new NoDiscount();
    HappyHourStrategy tenPercent = new TenPercent();
    HappyHourStrategy twentyFivePercent = new TwentyFivePercent();

    /* initialize Beers */
    Beer chouffe = new Beer("Chouffe", 3.0);
    Beer paleAle = new Beer("Pale Ale", 4.0);
    Beer ipa = new Beer("IPA", 5.0);

    /* waiter */
    PubWaiter bob = new PubWaiter("Bob");

    /* orders */
    bob.setStrategy(noDiscount);
    Double paleAlePrice = bob.calculatePrice(paleAle);

    bob.setStrategy(tenPercent);
    Double chouffePrice = bob.calculatePrice(chouffe);

    bob.setStrategy(twentyFivePercent);
    Double ipaPrice = bob.calculatePrice(ipa);

    if(paleAlePrice.equals(4.0)) {
      System.out.println("paleAlePrice ok");
    } else {
      System.out.println("paleAlePrice ko");
    };

    if(chouffePrice.equals(2.7)) {
      System.out.println("chouffePrice ok");
    } else {
      System.out.println("chouffePrice ko");
    };

    if(ipaPrice.equals(3.75)) {
      System.out.println("ipaPrice ok");
    } else {
      System.out.println("ipaPrice ko");
    };

  }
}