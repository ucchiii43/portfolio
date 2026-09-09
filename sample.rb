module Bar
  def bar
    'bar'
  end

  def baz
    'baz'
  end
end

class Sample
  @sample = 'sampleクラス'

  class << self
    def foo
      @sample + 'fooメソッド'
    end
  end

  def hoge
    @sample + 'hogeメソッド'
  end
end
