package EshheLegche.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import EshheLegche.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: ГрафикРаботы
 */
@Entity(name = "IISEshheLegcheГрафикРаботы")
@Table(schema = "public", name = "ГрафикРаботы")
public class GrafikRaboty {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "ВремяНачала")
    private String времяначала;

    @Column(name = "ВремяОкончания")
    private String времяокончания;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Dolzhnost")
    @Convert("Dolzhnost")
    @Column(name = "Должность", length = 16, unique = true, nullable = false)
    private UUID _dolzhnostid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Dolzhnost", insertable = false, updatable = false)
    private Dolzhnost dolzhnost;


    public GrafikRaboty() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getВремяНачала() {
      return времяначала;
    }

    public void setВремяНачала(String времяначала) {
      this.времяначала = времяначала;
    }

    public String getВремяОкончания() {
      return времяокончания;
    }

    public void setВремяОкончания(String времяокончания) {
      this.времяокончания = времяокончания;
    }


}